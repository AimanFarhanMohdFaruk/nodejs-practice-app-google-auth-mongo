const path = require("path");
const express = require("express");
const session = require("express-session")
const dotenv = require("dotenv");
const morgan = require("morgan");
const exphbs = require("express-handlebars");
const passport = require("passport")
const connectDB = require("./config/db")

//LOAD CONFIG ENV
dotenv.config({path: "./config/config.env"})

//Passport config, passport function created in passport.js
require("./config/passport")(passport)

//CONNECT DB through DB.JS file from config
connectDB()

const app = express();

//ADDED LOGGING for DEVELOPMENT
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
}

//Handlebars
app.engine('.hbs', exphbs.engine({default:"main",extname: ".hbs"}));
app.set('view engine', '.hbs');

// Sessions

app.use(session({
    secret: "keyboard cat",
    resave: "false",
    saveUninitialized: false,
}))

//Passport middleware
app.use(passport.initialize)
app.use(passport.session())


//Static Folder
app.use(express.static(path.join(__dirname, 'public')))


//Routes
app.use("/", require("./routes/index"))


const PORT = process.env.PORT || 3000


app.listen(PORT, console.log(`Server listening on ${process.env.NODE_ENV} on ${PORT}`))

