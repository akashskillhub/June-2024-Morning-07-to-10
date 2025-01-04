/*
    name | email | mobile | password | address | city | isActive
*/

const mongoose = require("mongoose")

const customerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    mobile: { type: String, required: true },
    password: { type: String, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    gender: { type: String, enum: ["male", "female"], required: true },
    isActive: { type: Boolean, default: false, required: true },
}, { timestamps: true })

module.exports = mongoose.model("customer", customerSchema)