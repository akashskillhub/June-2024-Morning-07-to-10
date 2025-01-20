const Customer = require("../models/Customer")
const Order = require("../models/Order")
const Resturant = require("../models/Resturant")
const asyncHandler = require("express-async-handler")


exports.getAdminResturant = asyncHandler(async (req, res) => {
    const result = await Resturant
        .find(req.body)
        .select("-password -createdAt -updatedAt -__v -startTime -endTime -hero")
        .sort({ createdAt: -1 })
    res.json({ message: "resturant fetch success", result })
})

exports.getAdminCustomer = asyncHandler(async (req, res) => {
    const result = await Customer
        .find(req.body)
        .select("-otp -createdAt -updatedAt -__v -otpSendOn")
        .sort({ createdAt: -1 })
    res.json({ message: "customer fetch success", result })
})

exports.getAdminOrder = asyncHandler(async (req, res) => {
    const result = await Order
        .find(req.body)
        .select(" -createdAt -updatedAt -__v -_id")
        .populate("resturant", "name email mobile")
        .populate("customer", "name email mobile")
        .populate("items.dish", "name type price")
        .sort({ createdAt: -1 })
    res.json({ message: "order fetch success", result })
})