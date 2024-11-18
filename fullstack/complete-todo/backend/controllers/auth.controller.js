const User = require("../models/User")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
exports.register = async (req, res) => {
    const { email, password } = req.body
    const result = await User.findOne({ email })
    if (result) {
        return res.status(409).json({ message: "email already registered" })
    }

    const hash = await bcrypt.hash(password, 10)

    await User.create({ ...req.body, password: hash })

    res.json({ message: "register success" })
}
exports.login = async (req, res) => {
    const { email, password } = req.body
    const result = await User.findOne({ email })
    if (!result) {
        return res.status(401).json({ message: "email not found" })
    }

    const isVerify = await bcrypt.compare(password, result.password)
    if (!isVerify) {
        return res.status(401).json({ message: "password do not mathc" })
    }

    const token = jwt.sign({ name: result.name, _id: result._id }, process.env.JWT_KEY)

    res.cookie("auth", token, { maxAge: 1000 * 60 * 60 })

    res.json({
        message: "login success", result: {
            _id: result._id,
            name: result.name,
            email: result.email,
        }
    })
}

exports.logout = async (req, res) => {
    res.clearCookie("auth")
    res.json({ message: "logout success" })
}