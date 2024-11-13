const { getAllUsers } = require("../controllers/admin.controller")

const router = require("express").Router()

router.get("/users", getAllUsers)

module.exports = router