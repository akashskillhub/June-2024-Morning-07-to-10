const { getAdminResturant, getAdminCustomer, getAdminOrder } = require("../controllers/admin.controller")

const router = require("express").Router()


router
    .get("/get-resturant", getAdminResturant)
    .get("/get-customer", getAdminCustomer)
    .get("/get-order", getAdminOrder)

module.exports = router