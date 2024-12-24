const { OAuth2Client } = require("google-auth-library")
const User = require("../models/User")
const jwt = require("jsonwebtoken")

exports.continueWithGoogle = async (req, res) => {
    try {
        const client = new OAuth2Client({ clientId: process.env.GOOGLE_CLIENT_ID })
        const data = await client.verifyIdToken({ idToken: req.body.credential })
        if (!data) {
            res.status(401).json({ message: "unable to verify account" })
        }
        const { picture, name, email } = data.payload

        const result = await User.findOne({ email })
        if (result) {
            // login => create token send cookie
            const token = jwt.sign({ _id: result._id }, process.env.JWT_KEY)
            res.cookie("auth", token, { httpOnly: true, maxAge: 1000 * 60 * 60 * 24 })
            res.json({ message: "login success", result })
        } else {
            // register => create new user
            const newUser = await User.create({ name, email, avatar: picture })

            const token = jwt.sign({ _id: newUser._id }, process.env.JWT_KEY)
            res.cookie("auth", token, { httpOnly: true, maxAge: 1000 * 60 * 60 * 24 })
            res.json({ message: "regiter success", result: newUser })
        }

    } catch (error) {
        console.log(error)
        res.status(401).json({ message: "unable to login" })
    }
}
exports.logout = (req, res) => {
    try {
        res.json({ message: "logout success" })
    } catch (error) {
        console.log(error)
        res.status(401).json({ message: "unable to login" })
    }
}