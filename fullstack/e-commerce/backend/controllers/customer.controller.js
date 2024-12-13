const Order = require("../models/Order")
const Product = require("../models/Product")
const User = require("../models/User")
const { sendEmail } = require("../utils/email")

exports.placeOrder = async (req, res) => {
    try {
        const orderData = await Order.create({
            customer: req.loggedInUser,
            address: req.body.address,
            city: req.body.city,
            products: req.body.products,
            payment: req.body.payment,
        })
        const result = await User.findById(req.loggedInUser)

        const allProducts = await Product.find({ _id: { $in: req.body.products } })
        const subTotal = allProducts.reduce((sum, item) => sum + item.price, 0)
        const tax = 18 * subTotal / 100
        const shipping = 100
        const total = subTotal + tax + shipping
        await sendEmail({
            to: result.email,
            subject: "🎉 Order Confirmation - Your Order Has Been Placed!",
            message: `
                <h1>Dear ${result.name},</h1>
                <p>
                    Thank you for shopping with us! We're excited to let you know that your order has been successfully placed. Here's a summary of your order details:
                </p>

                <p>Order Number: ${orderData._id}</p>
                <p>Order Date: ${new Date()}</p>
                <p>Items Ordered:</p>

                ${allProducts.map(item => `<p>${item.name} X ${item.price}</p>`)}
                <p> Total Amount: <strong>₹ ${total}</strong></p>


                <p>
                    You can expect your order to be delivered by [Delivery Date]. We’ll send you another email with tracking information as soon as your order is shipped.
                </p>
                <p>
                    If you have any questions or need assistance, feel free to contact us at [Customer Support Email] or call [Customer Support Number].
                </p>
                <p>Thank you for choosing [Your Company Name]. We hope to serve you again soon!</p>
                <p> Warm regards,</p>
        `
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