const { getAllArticles, addArticle, updateArticle, deleteArticle } = require("../controllers/articles.controller")

const router = require("express").Router()

router
    //       👇 same as in frontend blogApi.js
    .get("/fetch", getAllArticles)
    .post("/create", addArticle)
    .put("/modify/:blogId", updateArticle)
    .delete("/remove/:blogId", deleteArticle)

module.exports = router