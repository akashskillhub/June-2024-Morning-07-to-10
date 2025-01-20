const { updateInfo, addMenu, getMenu, updateMenu, deleteMenu, getResturantOrders, updateResturantStatus } = require("../controllers/resturant.controller")

const router = require("express").Router()

router
    .post("/update-info", updateInfo)
    .post("/add-menu", addMenu)

    .get("/get-menu", getMenu)
    .put("/update-menu/:mid", updateMenu)
    .delete("/delete-menu/:mid", deleteMenu)

    .get("/get-orders", getResturantOrders)
    .put("/change-status/:oid", updateResturantStatus)
module.exports = router