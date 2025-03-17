const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
    title: String,
    description: String,
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "dummy" }
});

module.exports = mongoose.model("project", projectSchema);