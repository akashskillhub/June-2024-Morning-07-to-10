const { registerUser, loginUser } = require("../controllers/auth.controller")

const router = require("express").Router()

router
    .post("/register", registerUser)
    .post("/login", loginUser)

module.exports = router