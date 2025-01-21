const Customer = require("../models/Customer")
const Order = require("../models/Order")
const Resturant = require("../models/Resturant")
const asyncHandler = require("express-async-handler")

const Rider = require("../models/Rider")
const { riderUpload } = require("../utils/upload")
const { checkEmpty } = require("../utils/checkEmpty")
const bcrypt = require("bcryptjs")
const cloud = require("./../utils/cloudinary")


exports.getAdminResturant = asyncHandler(async (req, res) => {
    const result = await Resturant
        .find(req.body)
        .select("-password -createdAt -updatedAt -__v -startTime -endTime -hero")
        .sort({ createdAt: -1 })
    res.json({ message: "resturant fetch success", result })
})

exports.getAdminCustomer = asyncHandler(async (req, res) => {
    const result = await Customer
        .find(req.body)
        .select("-otp -createdAt -updatedAt -__v -otpSendOn")
        .sort({ createdAt: -1 })
    res.json({ message: "customer fetch success", result })
})

exports.getAdminOrder = asyncHandler(async (req, res) => {
    const { limit, skip } = req.query
    const total = await Order.countDocuments()
    const result = await Order
        .find()
        .select(" -createdAt -updatedAt -__v -_id")
        .populate("resturant", "name email mobile")
        .populate("customer", "name email mobile")
        .populate("items.dish", "name type price")
        .sort({ createdAt: -1 })
        .limit(limit)
        .skip(skip)

    res.json({
        message: "order fetch success", result: {
            orders: result,
            total
        }
    })
})


exports.registerAdminRider = asyncHandler(async (req, res) => {
    riderUpload(req, res, async (err) => {
        if (err) {
            console.log(err)
            return res.status(400).json({ message: "multer error" })
        }
        const { name, email, mobile, address, city, gender, dob, profile } = req.body
        const { isError, error } = checkEmpty({ name, email, mobile, address, city, gender, dob, profile })
        if (isError) {
            return res.status(400).json({ message: "all fileds required", error })
        }
        const result = await Rider.findOne({ email })
        if (result) {
            return res.status(409).json({ message: "email already registered" })
        }
        const password = name.slice(0, 2) + email.slice(0, 2)
        const hash = await bcrypt.hash(password, 10)
        if (!req.files || req.files.length === 0) {
            return res.status(400).json({ message: "image is require" })
        }
        const image = {}
        for (const key in req.files) {
            const { secure_url } = await cloud.uploader.upload(req.files[key][0].path)
            image[key] = secure_url
        }
        await Rider.create({ ...req.body, ...image, password: hash })
        res.json({ message: "rider register success" })
    })
})

exports.getAdminRider = asyncHandler(async (req, res) => {
    const { limit, skip } = req.query
    const total = await Rider.countDocuments()
    const result = await Rider
        .find()
        .select("-password -createdAt -updatedAt -__v")
        .sort({ createdAt: -1 })
        .limit(limit)
        .skip(skip)
    res.json({
        message: "rider fetch success", result: {
            rider: result,
            total
        }
    })
})

exports.updateAdminRider = asyncHandler(async (req, res) => {
    riderUpload(req, res, async (err) => {
        if (err) {
            console.log(err);
            return res.status(400).json({ message: "unable to upload file" })
        }

        if (req.file) {
            const licenceImage = {}
            if (req.file && req.file.fieldname === 'licence') {
                const result = await Rider.findById(req.params.rid);
                if (result.licence) {
                    await cloud.uploader.destroy(path.basename(result.licence, path.extname(result.licence)));
                    const { secure_url } = await cloud.uploader.upload(req.file.path);
                    licenceImage[key] = secure_url
                }
            }

            const rcImage = {}
            if (req.file && req.file.fieldname === 'rc') {
                const result = await Rider.findById(req.params.rid);
                if (result.rc) {
                    await cloud.uploader.destroy(path.basename(result.rc, path.extname(result.rc)));
                    const { secure_url } = await cloud.uploader.upload(req.file.path);
                    rcImage[key] = secure_url
                }
            }
            const updateData = {
                ...req.body,
                licence: licenceImage ? licenceImage : req.body.licence,
                rc: rcImage ? rcImage : req.body.rc
            }
            await Rider.findByIdAndUpdate(req.params.rid, updateData)
            res.json({ message: "rider update success" })
        } else {
            await Rider.findByIdAndUpdate(req.params.rid, { ...req.body })
            res.json({ message: "rider update success" })
        }
    })
})
exports.updateRiderAccount = asyncHandler(async (req, res) => {
    const { rid } = req.params
    await Rider.findByIdAndUpdate(rid, { isActive: req.body.isActive })
    res.json({ message: "rider account update" })
})