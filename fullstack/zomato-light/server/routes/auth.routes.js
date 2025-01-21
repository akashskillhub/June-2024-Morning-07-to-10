const { registerAdmin, loginAdmin, verifyAdminOTP, logoutAdmin, registerResturant, loginResturant, logoutResturant, registerCustomer, loginCustomer, verifyCustomerOTP, logoutCustomer, loginRider, logoutRider } = require("../controllers/auth.controller")

const router = require("express").Router()

router
    .post("/register-admin", registerAdmin)
    .post("/login-admin", loginAdmin)
    .post("/verify-admin-otp", verifyAdminOTP)
    .post("/logout-admin", logoutAdmin)

    .post("/register-resturant", registerResturant)
    .post("/login-resturant", loginResturant)
    .post("/logout-resturant", logoutResturant)

    .post("/register-customer", registerCustomer)
    .post("/login-customer", loginCustomer)
    .post("/verify-customer-otp", verifyCustomerOTP)
    .post("/logout-customer", logoutCustomer)

    .post("/login-rider", loginRider)
    .post("/logout-rider", logoutRider)

module.exports = router