const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const { rateLimit } = require("express-rate-limit")
const app = express()

const limiter = rateLimit({ windowMs: 1000 * 60, limit: 5 })
// app.use(limiter)

app.use(cors())

app.use("/api/dummy", limiter, require("./dummy.route"))

app.use("*", (req, res) => {
    res.status(404).json({ message: "resource not found" })
})
mongoose.connect("mongodb://localhost:27017/dummy")
mongoose.connection.once("open", () => {
    console.log("db.connected")
    app.listen(5000, console.log("server running"))
})