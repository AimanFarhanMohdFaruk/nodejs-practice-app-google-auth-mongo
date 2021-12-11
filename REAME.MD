Workflow notes.

1. Setup database on mongodb

2. installed packages - express, morgan, dotenv, etc.

3. Setup the index.js (setup server and database connection)
    - create express server
    - load config files for ENV and PORT
    - added morgan for logging and setup development server
    - app.listen(process.env.PORT)

4. Create database conenction
    - setup db.js on config folder
    - use mongoose to connect to Mongo URI
    - export connectDB
    - place into index.js

5. Build templates and layouts using express-handlebars
    - setup file engine and build views,layouts and routes folder (in routes, render the views file)
    - app.use('/', require("./routes/index")) in your your main application file. basically asking the app to look for the routes in the index of the routes folder.
    - added materialise css framework. added the css links and JS link into the main.hbs file.

6. Create a static folder for the public css,js files for styling. connect using Path module and add the link to the main.hbs file

7. develop layout for different pages and link the layout in the routes folder

8. Configure GoogleOAuth20
    - start new application google cloud console
    - create API OAuth Client ID and add into your .env file
    - Use passportjs to configure authentication process
    - add passport into indexjs and passport config
    - setup express-session and initialize passport middleware
    - build passport.js


9. Building User model (should be done earlier)
    - create a models folder
    - create User.js
    - import Mongoose and build UserSchema