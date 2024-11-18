const User = require("../models/User")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
exports.register = async (req, res) => {
    const { email, password } = req.body
    const result = await User.findOne({ email }) // if present returns {} othewrwise null
    if (result) {
        return res.status(409).json({ message: "email already registed" })
    }
    const hash = await bcrypt.hash(password, 10)
    await User.create({ ...req.body, password: hash })
    res.json({ message: "register success" })
}

exports.login = async (req, res) => {
    const { email, password } = req.body

    const result = await User.findOne({ email })
    if (!result) {
        return res.status(401).json({ message: "email not registerd with us" })
    }

    const verify = await bcrypt.compare(password, result.password)
    if (!verify) {
        return res.status(401).json({ message: "invalid password" })
    }

    if (!result.isActive) {
        return res.status(401).json({ message: "account block by admin" })
    }


    const token = jwt.sign({ _id: result._id, fullname: result.fullname }, process.env.JWT_KEY)
    res.cookie("auth", token, { maxAge: 1000 * 60 * 60 })

    res.json({ message: "login success", result })
}

exports.logout = (req, res) => {
    res.clearCookie("auth")
    res.json({ message: "logout success" })
}