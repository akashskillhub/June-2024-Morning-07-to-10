const mongoose = require("mongoose")
const orderSchema = new mongoose.Schema({
    name: { type: String },
    amount: { type: Number },
    order_id: { type: String }
}, {})

module.exports = mongoose.model("order", orderSchema)