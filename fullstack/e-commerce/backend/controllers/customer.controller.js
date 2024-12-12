const Order = require("../models/Order")

exports.placeOrder = async (req, res) => {
    try {
        await Order.create({
            customer: req.loggedInUser,
            address: req.body.address,
            city: req.body.city,
            products: req.body.products,
            payment: req.body.payment,
        })
        res.json({ message: "order place success" })
    } catch (error) {
        console.log(error)
        res.staus(400).json({ message: "unable to place order" })
    }
}
exports.fetchCustomerOrders = async (req, res) => {
    try {
        const result = await Order
            .find({ customer: req.loggedInUser })
            .populate("customer", "_id name")
            .populate("products", "-qty -__v")
        res.json({ message: "order fetch success", result })
    } catch (error) {
        console.log(error)
        res.staus(400).json({ message: "unable to fetch order" })
    }
}