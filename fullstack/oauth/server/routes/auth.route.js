const { continueWithGoogle, logout } = require("../controllers/auth.controller")

const router = require("express").Router()

router
    .post("/continueWithGoogle", continueWithGoogle)
    .post("/logout", logout)

module.exports = router