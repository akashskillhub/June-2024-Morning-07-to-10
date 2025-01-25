const asyncHandler = require("express-async-handler")
const jwt = require("jsonwebtoken")
const Rider = require("../models/Rider")
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

exports.customerProtected = asyncHandler(async (req, res, next) => {
    const token = req.cookies["zomato-customer"]
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

exports.adminProtected = asyncHandler(async (req, res, next) => {
    const token = req.cookies["zomato-admin"]
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


exports.riderProtected = asyncHandler(async (req, res, next) => {
    const token = req.cookies["zomato-rider"]
    if (!token) {
        return res.status(401).json({ message: "no cookie found" })
    }
    jwt.verify(token, process.env.JWT_SECRET, async (err, decode) => {
        if (err) {
            console.log(err)
            return res.status(401).json({ message: "invalid token" })
        }
        const result = await Rider.findById(decode._id)
        if (!result.isActive) {
            return res.status(401).json({ message: "account blocked by admin" })
        }
        req.user = decode._id
        next()
    })
})