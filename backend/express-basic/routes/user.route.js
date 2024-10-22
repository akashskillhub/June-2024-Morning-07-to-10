const { getAllUsers } = require("../controllers/user.controller")

const router = require("express").Router()

router.get("/", getAllUsers)

module.exports = router // ES5 default export 