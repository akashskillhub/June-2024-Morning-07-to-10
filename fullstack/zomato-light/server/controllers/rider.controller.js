const asyncHandler = require("express-async-handler")
const Order = require("../models/Order")
const { io } = require("../socket/socket")

exports.getRiderOrders = asyncHandler(async (req, res) => {
    const result = await Order
        .find({ rider: req.user, status: { $ne: "delivered" } })
        .select("-rider -createdAt -updatedAt -__v")
        .populate("customer", "name mobile address") // joins
        .populate("resturant", "name hero mobile address") // joins
        .populate("items.dish", "name type image price")
        .sort({ createdAt: -1 })
    res.json({ message: "order fetch sucess", result })
})
exports.updateOrderStatus = asyncHandler(async (req, res) => {
    const { oid } = req.params
    await Order.findByIdAndUpdate(oid, { status: req.body.status })
    io.emit("status-update")
    res.json({ message: "order sttus update sucess" })
})