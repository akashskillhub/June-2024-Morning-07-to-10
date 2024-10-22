const { getAllBlogs, createBlogs, updateBlog, deleteBlog } = require("../controllers/blog.controller")

const router = require("express").Router()

router.get('/', getAllBlogs)
router.post('/create', createBlogs) // articles/create
router.put('/update', updateBlog)
router.delete('/delete', deleteBlog)

module.exports = router