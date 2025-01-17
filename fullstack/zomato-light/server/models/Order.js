const mongoose = require("mongoose")

const orderSchema = new mongoose.Schema({
    customer: {
        type: mongoose.Types.ObjectId,
        ref: "customer",
        required: true
    },
    resturant: {
        type: mongoose.Types.ObjectId,
        ref: "resturant",
        required: true
    },
    items: [
        {
            dish: { type: mongoose.Types.ObjectId, ref: "menu", required: true },
            qty: { type: Number, required: true },
        }
    ],
    rider: {
        type: mongoose.Types.ObjectId,
        ref: "rider",
    },
    status: {
        type: String,
        default: "placed",
        enum: ["placed", "cooking", "packing", "out", "delivered"]
    },
}, { timestamps: true })

module.exports = mongoose.model("order", orderSchema)