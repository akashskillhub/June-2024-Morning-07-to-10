const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
require("dotenv").config()

const app = express()
app.use(express.json()) // body parser
app.use(cors({ origin: "http://localhost:5173", credentials: true })) // CORS

app.use("/api/auth", require("./routes/auth.routes"))

mongoose.connect(process.env.MONGO_URL)
mongoose.connection.once("open", () => {
    console.log("db connected")
    app.listen(process.env.PORT || 5000, console.log("server running"))
})