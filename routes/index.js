const express = require("express")
const router = express.Router()
const { ensureAuth, ensureGuest } = require("../middleware/auth")

//descriptions for login and landing page
// routes, GET/

router.get("/", ensureGuest, (req,res) => {
    res.render("login", {
        layout: "login"
    });
})

//descriptions for dashboard
// routes, GET /dashboard

router.get("/dashboard" , ensureAuth, (req,res) => {
    res.render("dashboard")
})

module.exports = router;