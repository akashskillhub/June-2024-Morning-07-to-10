const { registerUser } = require("../controllers/auth.controller")

const router = require("express").Router()

router.post("/singup", registerUser)

module.exports = router