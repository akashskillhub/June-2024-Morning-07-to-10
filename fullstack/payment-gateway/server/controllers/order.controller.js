const razorpay = require("razorpay")
const crypto = require("crypto")
const Order = require("../models/Order")
exports.initiatePayment = async (req, res) => {
    try {
        const rz = new razorpay({
            key_id: process.env.RAZORPAY_API_KEY,
            key_secret: process.env.RAZORPAY_SCERET_KEY
        })
        rz.orders.create({
            amount: req.body.amount * 100,
            currency: "INR",
            receipt: Date.now().toString()
        }, (err, order) => {
            if (err) {
                console.log(err)
                return res.status(500).json({ message: "unable to process payment" })
            }
            res.json({ message: "paymnet initiate success", result: order })
        })
    } catch (error) {
        console.log(error)
        res.status(400).json({ message: "unable to place order" })
    }
}
exports.placeOrder = async (req, res) => {
    try {
        const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body
        const key = crypto
            .createHmac("sha256", process.env.RAZORPAY_SCERET_KEY)
            .update(`${razorpay_order_id}|${razorpay_payment_id}`)
            .digest("hex")

        if (key === razorpay_signature) {
            await Order.create({ ...req.body, order_id: razorpay_order_id })
            res.json({ message: "order place success" })
        } else {
            res.status(400).json({ message: "invalid signature, please contact your bank" })
        }

    } catch (error) {
        console.log(error)
        res.status(400).json({ message: "unable to place order" })
    }
}