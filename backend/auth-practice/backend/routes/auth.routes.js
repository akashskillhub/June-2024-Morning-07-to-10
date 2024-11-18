const { register, login, logout } = require("../controllers/auth.controller")

const router = require("express").Router()

router
    .post("/user-register", register)
    .post("/user-login", login)
    .post("/user-logout", logout)

module.exports = router