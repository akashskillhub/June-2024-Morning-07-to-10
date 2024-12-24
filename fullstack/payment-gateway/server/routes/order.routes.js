const { initiatePayment, placeOrder } = require("../controllers/order.controller")

const router = require("express").Router()

router
    .post("/initiate-payment", initiatePayment)
    .post("/place-order", placeOrder)

module.exports = router