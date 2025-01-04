const asyncHandler = require("express-async-handler")
const jwt = require("jsonwebtoken")
exports.resturantProtected = asyncHandler(async (req, res, next) => {
    const token = req.cookies.resturant
    if (!token) {
        return res.status(401).json({ message: "no cookie found" })
    }
    jwt.verify(token, process.env.JWT_SECRET, (err, decode) => {
        if (err) {
            console.log(err)
            return res.status(401).json({ message: "invalid token" })
        }
        req.user = decode._id
        next()

    })
})  