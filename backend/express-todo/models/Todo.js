const mongoose = require("mongoose")

//                              👇 validation
const todoSchema = new mongoose.Schema({
    task: { type: String, required: true },
    desc: { type: String, required: true },
})

//                       👇 create table
module.exports = mongoose.model("todo", todoSchema)
