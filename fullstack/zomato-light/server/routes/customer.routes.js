const { getLocation, updateCustomerInfo } = require("../controllers/customer.controllers")

const router = require("express").Router()

router
    .post("/get-location", getLocation)
    .post("/update-info", updateCustomerInfo)


module.exports = router