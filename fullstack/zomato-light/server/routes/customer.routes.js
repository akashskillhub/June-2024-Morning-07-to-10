const { getLocation, updateCustomerInfo, getResturants, getResturantMenu, placeOrder, getOrders, getHistory } = require("../controllers/customer.controllers")

const router = require("express").Router()

router
    .post("/get-location", getLocation)
    .post("/update-info", updateCustomerInfo)
    .get("/get-resturant", getResturants)
    .get("/get-resturant-menu/:rid", getResturantMenu)
    .post("/place-order", placeOrder)
    .get("/get-orders", getOrders)
    .get("/get-order-history", getHistory)


module.exports = router