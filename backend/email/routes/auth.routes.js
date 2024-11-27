const { register } = require("../controllers/auth.controller")

const router = require("express").Router()

router.post("/signup", register)

module.exports = router