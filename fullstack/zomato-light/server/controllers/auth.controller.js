
const asyncHandler = require('express-async-handler')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const validator = require('validator')
const Admin = require('../models/Admin')
const { generateOTP } = require('../utils/otp')
const { sendEmail } = require('../utils/email')
const { differenceInSeconds } = require('date-fns')
const { sendSMS } = require('../utils/sms')
const Resturant = require('../models/Resturant')


exports.registerAdmin = asyncHandler(async (req, res) => {
    const { name, email, mobile } = req.body
    if (validator.isEmpty(name) || validator.isEmpty(email) || validator.isEmpty(mobile)) {
        return res.status(400).json({ message: "all fields required" })
    }
    if (!validator.isEmail(email)) {
        return res.status(400).json({ message: "invalid email" })
    }
    if (!validator.isMobilePhone(mobile, "en-IN")) {
        return res.status(400).json({ message: "invalid mobile" })
    }
    await Admin.create({ name, email, mobile })
    res.json({ message: "admin register success" })

})
exports.loginAdmin = asyncHandler(async (req, res) => {
    const { userName } = req.body

    const result = await Admin.findOne({ $or: [{ email: userName }, { mobile: userName }] })
    if (!result) {
        return res.status(400).json({ message: "invalid credentials" })
    }
    // send OTP
    const otp = generateOTP()
    await Admin.findByIdAndUpdate(result._id, { otp, otpSendOn: Date.now() })
    // await sendSMS({ number: result.mobile, message: `your otp is ${otp}` })
    await sendEmail({
        message: `<h1>Your OTP is ${otp}</h1>`,
        subject: "verify otp to login",
        to: result.email
    })
    res.json({ message: "otp send" })
})
exports.verifyAdminOTP = asyncHandler(async (req, res) => {
    const { otp, userName } = req.body  // 1234

    const result = await Admin.findOne({ $or: [{ email: userName }, { mobile: userName }] })
    if (!result) {
        return res.status(401).json({ message: "invalid credentials" })
    }
    if (result.otp !== otp) {
        return res.status(401).json({ message: "invalid otp" })
    }
    if (differenceInSeconds(Date.now(), result.otpSendOn) > process.env.OTP_EXPIRE) {
        await Admin.findByIdAndUpdate(result._id, { otp: null })
        return res.status(401).json({ message: "otp expire" })
    }

    await Admin.findByIdAndUpdate(result._id, { otp: null })
    const token = jwt.sign({ _id: result._id }, process.env.JWT_SECRET, { expiresIn: "1d" })

    res.cookie("zomato-admin", token, {
        maxAge: 1000 * 60 * 60 * 24,
        httpOnly: true,
        secure: process.env.NODE_ENV === "production"
    })

    res.json({
        message: "login success",
        result: {
            name: result.name,
            email: result.email
        }
    })
})
exports.logoutAdmin = asyncHandler(async (req, res) => {
    res.clearCookie("zomato-admin")
    res.json({ message: "logout success" })
})


exports.registerResturant = asyncHandler(async (req, res) => {
    const { email, password } = req.body
    const result = await Resturant.findOne({ email })
    if (result) {
        return res.status(409).json({ message: "email already registered" })
    }
    const hash = await bcrypt.hash(password, 10)
    await Resturant.create({ ...req.body, password: hash })
    res.json({ message: "resturant register success" })

})

exports.loginResturant = async (req, res) => {
    const { email, password } = req.body
    const result = await Resturant.findOne({ email })
    if (!result) {
        return res.status(401).json({ message: "invalid credentials email" })
    }
    const isVerify = await bcrypt.compare(password, result.password)
    if (!isVerify) {
        return res.status(401).json({ message: "invalid credentials password" })
    }

    const token = jwt.sign({ _id: result._id }, process.env.JWT_SECRET, { expiresIn: "1d" })

    res.cookie("resturant", token, {
        maxAge: 1000 * 60 * 60 * 24,
        httpOnly: true,
        secure: process.env.NODE_ENV === "production"
    })

    res.json({
        message: "resturant login success", result: {
            _id: result._id,
            name: result.name,
            email: result.email,
        }
    })
}

exports.logoutResturant = async (req, res) => {
    res.clearCookie("resturant")
    res.json({ message: "resturant logout success" })
}
// resturant register
// resturant login
// resturant logout

// customer register
// customer login
// customer logout


// rider login
// rider logout