const { upload } = require("../utils/upload")

exports.getBlog = async (req, res) => {
    res.json({ message: "blog fetch success" })
}
exports.addBlog = async (req, res) => {
    upload(req, res, () => {
        console.log(req.body)
        res.json({ message: "blog create success" })
    })
}
exports.updateBlog = async (req, res) => {
    res.json({ message: "update blog success" })
}
exports.deleteBlog = async (req, res) => {
    res.json({ message: "delete blog success" })
}