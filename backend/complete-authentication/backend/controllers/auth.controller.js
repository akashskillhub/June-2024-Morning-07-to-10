// create
// find
// findByIdAndUpdate
// findByIdAndDelete

const User = require("../models/User")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
exports.registerUser = async (req, res) => {
    console.log(req.body)
    // const isFound = await User.findOne({ email: req.body.email }) // object
    // if (isFound) {
    //     return res.status(409).json({ message: "email already exist, please use another email" })
    // }
    // const x = await bcrypt.hash(req.body.password, 10)
    // await User.create({ ...req.body, password: x })
    res.status(201).json({ message: "register success", result: req.body })
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

    const x = jwt.sign({ name: "aaaaaa" }, "jwtpassword")
    res.cookie("test", x, { maxAge: 15000 }) // send cookie with response
    res.json({ message: "login success", })

    // middleware
}