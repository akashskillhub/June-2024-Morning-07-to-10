const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    fullname: { type: String, required: true },
    email: { type: String, required: true },
    degree: { type: String, required: true },
    city: { type: String, required: true },
    password: { type: String, required: true },
    isActive: { type: Boolean, default: true },
})

module.exports = mongoose.model("student", userSchema)