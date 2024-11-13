const cors = require("cors")
const cookieParser = require("cookie-parser")

const express = require("express")
const mongoose = require("mongoose")
require("dotenv").config()
const app = express()
app.use(express.json())

app.use(cookieParser())
app.use(cors({ credentials: true }))

app.use("/api/auth", require("./routes/auth.routes"))
app.use("/api/admin", require("./routes/admin.routes"))

app.use("*", (req, res) => {
    res.status(404).json({ message: "route not found" })
})

mongoose.connect(process.env.MONGO)
mongoose.connection.once("open", () => {
    console.log("mongo connected")
    app.listen(process.env.PORT, console.log("server running"))
})

//  login
//  JWT