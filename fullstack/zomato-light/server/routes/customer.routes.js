const { getLocation, updateCustomerInfo, getResturants, getResturantMenu } = require("../controllers/customer.controllers")

const router = require("express").Router()

router
    .post("/get-location", getLocation)
    .post("/update-info", updateCustomerInfo)
    .get("/get-resturant", getResturants)
    .get("/get-resturant-menu/:rid", getResturantMenu)


module.exports = router