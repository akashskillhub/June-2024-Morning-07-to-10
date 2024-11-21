const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
require("dotenv").config()

const app = express()
app.use(cors({ origin: "http://localhost:5173" }))
app.use("/api/blogs", require("./routes/blog.routes"))
mongoose.connect(process.env.MONGO_URL)
mongoose.connection.once("open", () => {
    console.log("db connect")
    app.listen(process.env.PORT, console.log("server running"))
})