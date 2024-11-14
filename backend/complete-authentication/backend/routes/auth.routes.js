const { registerUser, loginUser, logoutUser } = require("../controllers/auth.controller")

const router = require("express").Router()

router
    .post("/signup", registerUser)
    .post("/signin", loginUser)
    .post("/signout", logoutUser)

module.exports = router