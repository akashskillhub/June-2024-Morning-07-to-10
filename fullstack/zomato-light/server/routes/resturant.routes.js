const { updateInfo } = require("../controllers/resturant.controller")

const router = require("express").Router()

router.post("/update-info", updateInfo)

module.exports = router