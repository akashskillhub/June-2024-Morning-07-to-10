const mongoose = require("mongoose")

const customerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    mobile: { type: String, required: true },
    address: { type: String, },
    city: { type: String, },
    gender: { type: String, enum: ["male", "female"], },
    isActive: { type: Boolean, default: false },
    otp: { type: String },
    otpSendOn: { type: Date },
    infoComplete: { type: Boolean, default: false, },
}, { timestamps: true })

module.exports = mongoose.model("customer", customerSchema)