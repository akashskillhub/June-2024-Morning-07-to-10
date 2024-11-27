const Blogs = require("../models/Blogs")
const path = require("path")
const { upload } = require("../utils/upload")

const cloudinary = require("cloudinary").v2

cloudinary.config({
    api_key: process.env.CLOUDINARY_API_KEY,
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_secret: process.env.CLOUDINARY_API_SECRET,
})

exports.getBlog = async (req, res) => {
    const result = await Blogs.find()
    res.json({ message: "blog fetch success", result })
}
exports.addBlog = async (req, res) => {
    upload(req, res, async err => {
        if (err) {
            console.log(err);
            return res.status(400).json({ message: "unable to upload file" })
        }
        const { secure_url } = await cloudinary.uploader.upload(req.file.path)
        await Blogs.create({ ...req.body, hero: secure_url })

        res.json({ message: "blog create success" })
    })
}
exports.updateBlog = async (req, res) => {
    upload(req, res, async err => {
        if (err) {
            console.log(err)
            return res.status(400).json({ message: "unable to upload file" })
        }
        if (req.file) {
            // new iamge recived
            // step 1 delete old image from cloudinary
            await cloudinary.uploader.destroy(path.basename(req.body.oldHero))
            // step 2 upload new image to cloudinary
            const { secure_url } = await cloudinary.uploader.upload(req.file.path)
            // step 3 update databse
            await Blogs.findByIdAndUpdate(req.params.blogId, { ...req.body, hero: secure_url })
        } else {
            // no image
            // step 1 update database
            await Blogs.findByIdAndUpdate(req.params.blogId, req.body)
        }

        res.json({ message: "update blog success" })

    })

}
exports.deleteBlog = async (req, res) => {
    const result = await Blogs.findById(req.params.blogId)
    await cloudinary.uploader.destroy(path.basename(result.hero))
    await Blogs.findByIdAndDelete(req.params.blogId)
    res.json({ message: "delete blog success" })
}