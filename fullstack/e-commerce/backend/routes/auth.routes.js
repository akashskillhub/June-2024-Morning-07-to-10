const { registerAdmin, loginAdmin, logoutAdmin, registerCustomer, loginCustomer, logoutCustomer } = require("../controllers/auth.controller")

const router = require("express").Router()


router
    .post("/admin/register", registerAdmin)
    .post("/admin/login", loginAdmin)
    .post("/admin/logout", logoutAdmin)

    .post("/customer/register", registerCustomer)
    .post("/customer/login", loginCustomer)
    .post("/customer/logout", logoutCustomer)

module.exports = router