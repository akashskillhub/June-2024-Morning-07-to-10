const mongoose = require("mongoose")

const todoSchema = new mongoose.Schema({
    employee: { type: mongoose.Types.ObjectId, ref: "employee", required: true },// FK
    task: { type: String, required: true },
    desc: { type: String, required: true },
    priority: { type: String, required: true },
    isComplete: { type: Boolean, default: false },
}, { timestamps: true })

module.exports = mongoose.model("todo", todoSchema)