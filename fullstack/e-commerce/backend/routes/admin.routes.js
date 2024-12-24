const { getProducts, addProduct, updateProducts, deleteProducts, fetchAdminOrders, adminUpdateOrderStatus, adminUserFetch, adminBlockUnBlockUser } = require("../controllers/admin.controller")

const router = require("express").Router()

router
    .get("/product", getProducts)
    .post("/product/add", addProduct)
    .put("/product/update/:productId", updateProducts)
    .delete("/product/delete/:productId", deleteProducts)
    .get("/orders", fetchAdminOrders)
    .put("/order/update/:oid", adminUpdateOrderStatus)
    .get("/user/fetch", adminUserFetch)
    .put("/user/block/:uid", adminBlockUnBlockUser)

module.exports = router