const { getAllUsers, getDymmyData } = require("../controllers/admin.controller")
const { adminProtected } = require("../middleware/protected")

const router = require("express").Router()

router
    .get("/users", adminProtected, getAllUsers)
    .get("/dummy", adminProtected, getDymmyData)

module.exports = router