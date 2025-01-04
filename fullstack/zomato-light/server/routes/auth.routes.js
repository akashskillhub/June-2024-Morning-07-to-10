const { registerAdmin, loginAdmin, verifyAdminOTP, logoutAdmin, registerResturant, loginResturant, logoutResturant } = require("../controllers/auth.controller")

const router = require("express").Router()

router
    .post("/register-admin", registerAdmin)
    .post("/login-admin", loginAdmin)
    .post("/verify-admin-otp", verifyAdminOTP)
    .post("/logout-admin", logoutAdmin)

    .post("/register-resturant", registerResturant)
    .post("/login-resturant", loginResturant)
    .post("/logout-resturant", logoutResturant)


module.exports = router