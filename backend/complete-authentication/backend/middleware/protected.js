
const jwt = require("jsonwebtoken")
exports.adminProtected = async (req, res, next) => {
    const token = req.cookies.test
    if (!token) {
        return res.status(401).json({ message: "no cookie found" })
    }
    jwt.verify(token, process.env.JWT_SECRET, (error, decode) => {
        if (error) {
            return res.status(401).json({ message: "invalid token" })
        }
        next()
    })
}