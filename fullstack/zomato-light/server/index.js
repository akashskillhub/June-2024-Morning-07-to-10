const express = require("express")
const mongoose = require("mongoose")
require("dotenv").config()
const cors = require("cors")
const cookieParser = require("cookie-parser")
const { resturantProtected, customerProtected, adminProtected, riderProtected } = require("./middlewares/protected")
const { app, httpServer } = require("./socket/socket")
const path = require("path")
// const app = express()

app.use(express.json()) // req.body
app.use(cookieParser()) // req.cookies
app.use(express.static("dist"))
app.use(cors({
    origin: true,
    credentials: true // cookie
}))

app.use("/api/auth", require("./routes/auth.routes"))
app.use("/api/resturant", resturantProtected, require("./routes/resturant.routes"))
app.use("/api/customer", customerProtected, require("./routes/customer.routes"))
app.use("/api/admin", adminProtected, require("./routes/admin.routes"))
app.use("/api/rider", riderProtected, require("./routes/rider.routes"))
app.use("*", (req, res) => {
    res.sendFile(path.join(__dirname, "dist", "index.html"))
    // res.status(404).json({ message: "resource not found" })
})
app.use((err, req, res, next) => {
    console.log(err)
    res.status(500).json({ message: "server error" })
})

mongoose.connect(process.env.MONGO_URL)
mongoose.connection.once("open", () => {
    console.log("db connected")
    httpServer.listen(process.env.PORT || 5000, console.log("server running"))
})
