const User = require("../models/User")
const jwt = require("jsonwebtoken")
exports.getAllUsers = async (req, res) => {

    const result = await User.find()
    res.json({ message: "user fetch success", result })

}
exports.getDymmyData = async (req, res) => {
    res.json({ message: "dummy data fetch success" })
}