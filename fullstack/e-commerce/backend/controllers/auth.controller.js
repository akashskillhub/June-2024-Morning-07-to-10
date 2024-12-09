const bcrypt = require("bcryptjs")
const Admin = require("../models/Admin")
const jwt = require("jsonwebtoken")

exports.registerAdmin = async (req, res) => {
    const { email, password } = req.body
    const result = await Admin.findOne({ email })
    if (result) {
        return res.status(409).json({ message: "email already registered" })
    }
    const hash = await bcrypt.hash(password, 10)
    await Admin.create({ ...req.body, password: hash })

    res.json({ message: "admin register success" })
}
exports.loginAdmin = async (req, res) => {
    const { email, password } = req.body
    const result = await Admin.findOne({ email })
    if (!result) {
        return res.status(401).json({ message: "invalid credentials email" })
    }

    const isVerify = await bcrypt.compare(password, result.password)
    if (!isVerify) {
        return res.status(401).json({ message: "invalid credentials password" })
    }

    const token = jwt.sign({ _id: result._id }, process.env.JWT_SECRET)

    res.cookie("admin", token, {
        maxAge: 1000 * 60 * 60 * 24,
        httpOnly: true,
        // secure: true
    })

    res.json({
        message: "admin login success", result: {
            _id: result._id,
            name: result.name,
            email: result.email,
        }
    })
}
exports.logoutAdmin = async (req, res) => {
    res.clearCookie("admin")
    res.json({ message: "admin logout success" })
}

// customerRegister
// customerLogin
// customerLogout
