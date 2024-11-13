const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const app = express()
app.use(express.json()) // body parser
app.use(cors())
app.use("/api/auth", require("./routes/auth.routes"))

mongoose.connect("mongodb://localhost:27017/basic-auth")
mongoose.connection.once("open", () => {
    console.log("Mongo Connected")
    app.listen(5000, console.log("server running"))
})