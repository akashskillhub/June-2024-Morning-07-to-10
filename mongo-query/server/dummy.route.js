const { getData, getLookupData } = require("./dummy.controller")

const router = require("express").Router()
router
    .get("/", getData)
    .get("/lookup", getLookupData)
module.exports = router