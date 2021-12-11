const GoogleStrategy = require("passport-google-oauth20").Strategy;
const moongoose = require("mongoose");
const User = require("../models/User");



module.exports = function(passport){
    passport.use( new GoogleStrategy({
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: "auth/google/callback"
    },
    async () => {
        
    }
    
    ))
}