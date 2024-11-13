const { registerUser, loginUser } = require("../controllers/auth.controller")

const router = require("express").Router()

router
    .post("/singup", registerUser)
    .post("/singin", loginUser)

module.exports = router