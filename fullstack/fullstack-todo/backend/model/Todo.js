const mongoose = require("mongoose")
//                              👇 validation
const todoSchema = new mongoose.Schema({
    task: { type: String, required: true },
    desc: { type: String, required: true },
    priority: { type: String, required: true },
})

module.exports = mongoose.model("note", todoSchema)