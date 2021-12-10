const express = require("express")
const router = express.Router()

//descriptions for login and landing page
// routes, GET/

router.get("/", (req,res) => {
    res.render("login", {
        layout: "login"
    });
})

//descriptions for dashboard
// routes, GET /dashboard

router.get("/dashboard" , (req,res) => {
    res.render("dashboard")
})

module.exports = router;