const asyncHandler = require("express-async-handler")
const upload = require("../utils/upload")
const validator = require("validator")
const { checkEmpty } = require("../utils/checkEmpty")
const cloud = require("../utils/cloudinary")
const Resturant = require("../models/Resturant")

exports.updateInfo = asyncHandler(async (req, res) => {
    upload(req, res, async (err) => {
        if (err) {
            console.log(err)
            return res.status(400).json({ message: "multer error" })
        }

        if (!req.files || req.files.length === 0) {
            return res.status(400).json({ message: "hero image is required" })
        }

        const { mobile, address, city, type, startTime, endTime } = req.body
        const { isError, error } = checkEmpty({ mobile, address, city, type, startTime, endTime })
        if (isError) {
            return res.status(400).json({ message: "all fields required", error })
        }
        const image = {}
        for (const key in req.files) {
            const { secure_url, } = await cloud.uploader.upload(req.files[key][0].path)
            image[key] = secure_url
        }

        await Resturant.findByIdAndUpdate(req.user, { ...req.body, ...image, infoComplete: true })
        res.json({ message: "info update" })
    })
})  