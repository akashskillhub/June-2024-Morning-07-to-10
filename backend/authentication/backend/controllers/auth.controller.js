const User = require("../models/User")
const bcrypt = require("bcryptjs")
exports.registerUser = async (req, res) => {
    const { name, email, password, mobile } = req.body
    const x = await bcrypt.hash(password, 10)
    await User.create({ name, email, mobile, password: x })
    res.json({ message: "register Success" })
}

exports.loginUser = async (req, res) => {
    const { email, password } = req.body
    const result = await User.findOne({ email })

    if (!result) {
        console.log("email not found");
        return res.status(400).json({ message: "email not found" })
    }

    const verify = await bcrypt.compare(password, result.password)
    if (!verify) {
        return res.status(400).json({ message: "password do not match" })
    }

    res.json({ message: "login Success", result })
}

// create
// find
