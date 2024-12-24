const { adminRegister, adminLogin, adminLogout, employeeRegister, employeeLogin, employeeLogout } = require("../controllers/auth.controller")
const { adminProtected } = require("../middlewares/protected.middleware")

const router = require("express").Router()

router
    .post("/admin/register", adminRegister)
    .post("/admin/login", adminLogin)
    .post("/admin/logout", adminLogout)

    .post("/employee/register", adminProtected, employeeRegister)
    .post("/employee/login", employeeLogin)
    .post("/employee/logout", employeeLogout)
module.exports = router