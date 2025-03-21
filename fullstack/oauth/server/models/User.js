const mongoose = require("mongoose")
const userSchema = new mongoose.Schema({
    name: { type: String },
    email: { type: String },
    avatar: { type: String },
}, {})

module.exports = mongoose.model("user", userSchema)