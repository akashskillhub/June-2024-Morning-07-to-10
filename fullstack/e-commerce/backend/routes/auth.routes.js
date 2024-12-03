const { registerAdmin, loginAdmin, logoutAdmin } = require("../controllers/auth.controller")

const router = require("express").Router()

// http://lcoalhost:5000/api/auth/admin/register
router
    // .post("/admin/register", registerAdmin)
    .post("/admin/login", loginAdmin)
    .post("/admin/logout", logoutAdmin)

module.exports = router