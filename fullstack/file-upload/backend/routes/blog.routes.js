const { getBlog, addBlog, updateBlog, deleteBlog } = require("../controllers/blog.controller")

const router = require("express").Router()

router
    .get("/fetch", getBlog)
    .post("/create", addBlog)
    .put("/update", updateBlog)
    .delete("/delete", deleteBlog)

module.exports = router