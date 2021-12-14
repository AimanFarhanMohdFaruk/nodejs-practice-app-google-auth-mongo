const express = require("express")
const router = express.Router()
const passport = require("passport")

//descriptions Auth with Google
// routes get/auth/google

router.get("/google", passport.authenticate('google', { scope: ['profile'] }))

//descriptions for Google Auth Callback
// routes, GET /auth/google/callback

router.get(
    "/google/callback", passport.authenticate('google',{ failureRedirect:
'/'}), (req,res) => {
    res.redirect('/dashboard')
})


//logout
// /auth/logout

router.get(
    "/logout", (req,res) => {
        req.logout();
        res.redirect("/")
    }
)

module.exports = router;