const express = require("express")
require("dotenv").config()
const mongoose = require("mongoose")
const cookieParser = require("cookie-parser")
const { adminProtected } = require("./middlewares/protected.middleware")

const app = express()
app.use(express.json())
app.use(cookieParser())
app.use("/api/admin", adminProtected, require("./routes/admin.routes"))
app.use("/api/auth", require("./routes/auth.routes"))

mongoose.connect(process.env.MONGO_URL)
mongoose.connection.once("open", () => {
    console.log("mongo connected")
    app.listen(process.env.PORT, console.log("server running"))
})