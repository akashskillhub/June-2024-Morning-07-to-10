// create
// find
// findByIdAndUpdate
// findByIdAndDelete

const User = require("../models/User")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
exports.registerUser = async (req, res) => {
    const isFound = await User.findOne({ email: req.body.email }) // object
    if (isFound) {
        return res.status(409).json({ message: "email already exist, please use another email" })
    }
    const x = await bcrypt.hash(req.body.password, 10)
    await User.create({ ...req.body, password: x })
    res.status(201).json({ message: "register successasdasdas", result: req.body })
}

exports.loginUser = async (req, res) => {
    const { email, password } = req.body

    // check email
    const isFound = await User.findOne({ email })
    if (!isFound) {
        return res.status(401).json({ message: "email not found" })
    }

    // compare password
    const isVerfy = await bcrypt.compare(password, isFound.password)
    if (!isVerfy) {
        return res.status(401).json({ message: "password do not match" })
    }
    //                 👇payload
    const x = jwt.sign({ name: isFound.name, _id: isFound._id }, process.env.JWT_SECRET)
    res.cookie("test", x, { maxAge: process.env.MAX_AGE }) // send cookie with response
    res.json({
        message: "login success",
        result: { name: isFound.name, email: isFound.email }
    })
}

exports.logoutUser = (req, res) => {
    res.clearCookie("test")
    res.json({ message: "logout success" })
}