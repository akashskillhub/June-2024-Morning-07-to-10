const mongose = require("mongoose")

const userSchema = new mongose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    mobile: { type: String, required: true },
    gender: { type: String, required: true },
})

module.exports = mongose.model("user", userSchema)