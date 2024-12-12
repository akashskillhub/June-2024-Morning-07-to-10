const mongoose = require("mongoose")

const orderSchema = new mongoose.Schema({
    customer: { type: mongoose.Types.ObjectId, ref: "user", required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    payment: { type: String, required: true },
    products: { type: [mongoose.Types.ObjectId], ref: "product", required: true },
    status: { type: String, enum: ["placed", "delivered", "cancel"], default: "placed" },
}, { timestamps: true }) // 👈 creats createdAt and updatedAt keys
module.exports = mongoose.model("order", orderSchema) 