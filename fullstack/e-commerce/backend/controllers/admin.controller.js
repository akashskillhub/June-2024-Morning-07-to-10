// product crud

const Product = require("../models/Product")
const path = require("path")
const { upload } = require("../utils/upload")
const Order = require("../models/Order")
const { sendEmail } = require("../utils/email")
const User = require("../models/User")

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
            1 change data
            2 change image
                1 image remove
                2 only upload new image
    
    */
    upload(req, res, async err => {
        try {
            console.log(req.body)

            const allImages = []
            if (req.files && req.files.length > 0) {

                // upload number  2
                // remove  1
                // already 5

                for (const item of req.files) {
                    const { secure_url } = await cloudinary.uploader.upload(item.path)
                    allImages.push(secure_url)
                }
            }
            const oldProduct = await Product.findById(req.params.productId)
            if (req.body.remove) {
                const result = oldProduct.hero.filter(item => !req.body.remove.includes(item))
                oldProduct.hero = result
                if (typeof req.body.remove === "string") {
                    // c7yjstomhytrbq1iusdz.png
                    await cloudinary
                        .uploader
                        .destroy(path.basename(req.body.remove, path.extname(req.body.remove)))
                } else {
                    for (const item of req.body.remove) {
                        // c7yjstomhytrbq1iusdz.png
                        await cloudinary
                            .uploader
                            .destroy(path.basename(item, path.extname(item)))
                    }
                }
            }
            await Product.findByIdAndUpdate(req.params.productId, {
                ...req.body,
                hero: [...oldProduct.hero, ...allImages]
            })
            res.json({ message: "product update success" })
        } catch (error) {
            console.log(error)
            res.status(400).json({ message: "something went wrong" })
        }
    })


}
exports.deleteProducts = async (req, res) => {
    const result = await Product.findById(req.params.productId)
    // step 1 cloudinary / AWS S3
    for (const item of result.hero) {
        await cloudinary.uploader.destroy(path.basename(item, path.extname(item)))
    }
    // step 2 database
    await Product.findByIdAndDelete(req.params.productId)
    res.json({ message: "product delete success" })
}


exports.fetchAdminOrders = async (req, res) => {
    const total = await Order.countDocuments()
    const { skip, limit } = req.query
    const result = await Order
        .find()
        .skip(skip)
        .limit(limit)
        .populate("customer", "name")
        .populate("products", "-__v")

    res.json({ message: "order fetch success", result, total })
}
exports.adminUpdateOrderStatus = async (req, res) => {
    await Order.findByIdAndUpdate(req.params.oid, { status: req.body.status })
    const x = await Order.findById(req.params.oid)
    const result = await User.findById(x.customer)
    if (req.body.status !== "placed") {
        await sendEmail({
            to: result.email,
            subject: "our Order Status Has Been Updated!",
            message: `Your Order Status: Now ${req.body.status}`
        })
    }
    res.json({ message: "order status update success" })
}



exports.adminUserFetch = async (req, res) => {
    try {
        const total = await User.countDocuments()
        const { skip, limit } = req.query
        const result = await User.find().skip(skip).limit(limit)
        res.json({ message: "user fetch success", result, total })
    } catch (error) {
        res.status(400).json({ message: "unable to fetch" })
    }
}
exports.adminBlockUnBlockUser = async (req, res) => {
    try {
        await User.findByIdAndUpdate(req.params.uid, { isActive: req.body.isActive })
        res.json({ message: "user block success" })
    } catch (error) {
        res.status(400).json({ message: "unable to block" })
    }
}

