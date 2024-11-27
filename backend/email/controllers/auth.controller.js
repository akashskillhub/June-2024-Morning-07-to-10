const sendEmail = require("../utils/email")

exports.register = async (req, res) => {
    try {
        const { email } = req.body
        await sendEmail({ subject: "test", message: "hello", email, })
        res.json({ message: "register success" })
    } catch (error) {
        res.status(400).json({ message: "unable to register", error })
    }
}