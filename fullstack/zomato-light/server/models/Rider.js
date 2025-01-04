
const mongoose = require("mongoose")

const riderSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    mobile: { type: String, required: true },
    password: { type: String, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    gender: { type: String, enum: ["male", "female"], required: true },
    isActive: { type: Boolean, default: false, required: true },
    licence: { type: String, required: true },
    rc: { type: String, required: true },
    dob: { type: Date, required: true },
    profile: { type: String, required: true },
}, { timestamps: true })

module.exports = mongoose.model("rider", riderSchema)