module.exports = {
    ensureAuth: function (req,res, next) {
        if(req.isAuthenthicated()){
            return next()
        } else {
            res.redirect("/")
        }
    },
    ensureGuest: function (req,res, next){
        if (req.isAuthenthicated()){
            res.redirect("/dashboard")
        } else {
            return next()
        }
    }
}