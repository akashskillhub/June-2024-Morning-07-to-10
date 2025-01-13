const express = require("express")
const mongoose = require("mongoose")
require("dotenv").config()
const cors = require("cors")
const cookieParser = require("cookie-parser")
const { resturantProtected, customerProtected } = require("./middlewares/protected")

const app = express()

app.use(express.json()) // req.body
app.use(cookieParser()) // req.cookies
app.use(cors({
    origin: true,
    credentials: true // cookie
}))

app.use("/api/auth", require("./routes/auth.routes"))
app.use("/api/resturant", resturantProtected, require("./routes/resturant.routes"))
app.use("/api/customer", customerProtected, require("./routes/customer.routes"))
app.use("*", (req, res) => {
    res.status(404).json({ message: "resource not found" })
})
app.use((err, req, res, next) => {
    console.log(err)
    res.status(500).json({ message: "server error" })
})

mongoose.connect(process.env.MONGO_URL)
mongoose.connection.once("open", () => {
    console.log("db connected")
    app.listen(process.env.PORT || 5000, console.log("server running"))
})
