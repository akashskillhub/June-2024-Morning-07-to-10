const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    name: { type: String, reqiured: true },
    price: { type: Number, reqiured: true },
    desc: { type: String, reqiured: true },
    hero: { type: [String], reqiured: true },
    qty: { type: Number, reqiured: true },
})
module.exports = mongoose.model("product", productSchema)