const { getAdminResturant, getAdminCustomer, getAdminOrder, registerAdminRider, getAdminRider, updateAdminRider, updateRiderAccount, getAdminActiveRider, assignRider } = require("../controllers/admin.controller")

const router = require("express").Router()


router
    .get("/get-resturant", getAdminResturant)
    .get("/get-customer", getAdminCustomer)
    .get("/get-order", getAdminOrder)

    .post("/register-rider", registerAdminRider)
    .get("/get-rider", getAdminRider)
    .put("/update-rider/:rid", updateAdminRider)
    .put("/update-rider-account/:rid", updateRiderAccount)

    .get("/get-active-rider", getAdminActiveRider)
    .put("/assign-rider/:oid", assignRider)

module.exports = router