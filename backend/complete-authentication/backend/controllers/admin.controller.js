const User = require("../models/User")

exports.getAllUsers = async (req, res) => {

    console.log(req.cookies);
    if (!req.cookies.test) {
        return res.status(401).json({
            messsage: "unauthorized access. please login"
        })
    }

    const result = await User.find()
    res.json({ message: "fetch success", result })
}