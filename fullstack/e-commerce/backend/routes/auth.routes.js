const { registerAdmin, loginAdmin, logoutAdmin } = require("../controllers/auth.controller")

const router = require("express").Router()

router
    .post("/admin/register", registerAdmin)
    .post("/admin/login", loginAdmin)
    .post("/admin/logout", logoutAdmin)

module.exports = router