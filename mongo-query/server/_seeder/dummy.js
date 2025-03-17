const mongoose = require("mongoose")

const dummySchema = mongoose.Schema({
    name: String,
    mobile: Number,
    age: Number,
    gender: String,
    active: Boolean,
    budget: Number,
    skills: [String],
})

module.exports = mongoose.model("dummy", dummySchema)