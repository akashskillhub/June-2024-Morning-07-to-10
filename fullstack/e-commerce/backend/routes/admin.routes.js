const { getProducts, addProduct, updateProducts, deleteProducts } = require("../controllers/admin.controller")

const router = require("express").Router()

router
    .get("/product", getProducts)
    .post("/product/add", addProduct)
    .put("/product/update/:productId", updateProducts)
    .delete("/product/delete/:productId", deleteProducts)

module.exports = router