const { getBlog, addBlog, updateBlog, deleteBlog } = require("../controllers/blog.controller")

const router = require("express").Router()

router
    .get("/fetch", getBlog)
    .post("/create", addBlog)
    .put("/update/:blogId", updateBlog)
    .delete("/delete/:blogId", deleteBlog)

module.exports = router