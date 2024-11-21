const mongoose = require("mongoose")

const todoSchema = new mongoose.Schema({
    userId: { type: mongoose.Types.ObjectId, ref: "user", required: true },
    task: { type: String, required: true },
    desc: { type: String, required: true },
    priority: { type: String, required: true },
    complete: { type: Boolean, default: false },
})

module.exports = mongoose.model("todo", todoSchema)