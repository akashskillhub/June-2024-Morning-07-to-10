const User = require("../models/User")

exports.registerUser = async (req, res) => {
    await User.create(req.body)
    res.json({ message: "user register success" })
}
/*
    create
    find
    findByIdAndUpdate
    findByIdAndDelete
*/