// product crud

const Product = require("../models/Product")
const path = require("path")
const { upload } = require("../utils/upload")

const cloudinary = require("cloudinary").v2

cloudinary.config({
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME
})

exports.addProduct = async (req, res) => {
    upload(req, res, async err => {
        if (err) {
            console.log(err)
            return res.status(400).json({ message: "unable to upload" })
        }
        if (req.files) {
            // const allImages = []
            // for (const item of req.files) {
            //     const { secure_url } = await cloudinary.uploader.upload(item.path)
            //     allImages.push(secure_url)
            // }
            // console.log(allImages)


            // promise all👇

            const allImages = []
            const heros = []
            for (const item of req.files) {
                allImages.push(cloudinary.uploader.upload(item.path))
            }
            const data = await Promise.all(allImages)
            for (const item of data) {
                heros.push(item.secure_url)
            }
            // promise all end 
            await Product.create({ ...req.body, hero: heros })
            res.json({ message: "product add success" })
        } else {
            res.status(400).json({ message: "hero image is required" })
        }
    })
}
exports.getProducts = async (req, res) => {
    const result = await Product.find()
    res.json({ message: "product fetch success", result })
}
exports.updateProducts = async (req, res) => {
    /*
        name:""
        hero:["img1","img2","img3","img4"]

        step 1 delete "img2","img3" cloudinary req.body.remove
        step 2 upload new iamge cloudinary  req.files
        step 3 update database findByIdAndUpdate()  hero:["img1","new iamge","img4"]
    */

    upload(req, res, async err => {
        if (err) {
            console.log(err);
            return res.status(400).json({ message: "unable to upload" })
        }
        // console.log(req.body)
        // console.log(req.files)

        if (req.body.remove) {
            // remove old image
            await cloudinary.uploader.destroy(path.basename(req.body.remove))
        }

        const heros = []
        if (req.files) {
            // upload new image 
            const allImages = []
            for (const item of req.files) {
                allImages.push(cloudinary.uploader.upload(item.path))
            }
            const data = await Promise.all(allImages)
            for (const item of data) {
                heros.push(item.secure_url)
            }
        }

        await Product.findByIdAndUpdate(req.params.productId, { ...req.body, hero: heros })

        res.json({ message: "product update success" })
    })
}
exports.deleteProducts = async (req, res) => {
    res.json({ message: "product delete success" })
}