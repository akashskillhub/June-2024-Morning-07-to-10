const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name: { type: String, reqiured: true },
    mobile: { type: String, reqiured: true },
    email: { type: String, reqiured: true },
    password: { type: String, reqiured: true },
})
module.exports = mongoose.model("user", userSchema) 