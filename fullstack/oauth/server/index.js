const express = require("express")
const mongoose = require("mongoose")
require("dotenv").config()

const cors = require("cors")
const cookieParser = require("cookie-parser")
const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(cors({ origin: "http://localhost:5173", credentials: true }))

app.use("/api/auth", require("./routes/auth.route"))
app.use("*", (req, res) => {
    res.status(404).json({ message: "resource not found 404" })
})

mongoose.connect(process.env.MONGO_URL)
mongoose.connection.once("open", () => {
    console.log("mongo connected")
    app.listen(process.env.PORT, console.log("server running"))
})
