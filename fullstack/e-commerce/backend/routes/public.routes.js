const { getPublicProducts, getPublicProductDetails } = require("../controllers/public.controller")

const router = require("express").Router()

router
    .get("/products", getPublicProducts)
    .get("/product-details/:productId", getPublicProductDetails)

module.exports = router