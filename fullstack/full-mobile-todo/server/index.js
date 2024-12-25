const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const cookieParser = require("cookie-parser")
const { adminProtected, employeeProtected } = require("./middlewares/protected.middleware")
require("dotenv").config()

const app = express()
app.use(express.json()) // req.body
app.use(cookieParser()) // req.cookies
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))

app.use("/api/auth", require("./routes/auth.routes"))
app.use("/api/admin", adminProtected, require("./routes/admin.routes"))
app.use("/api/employee", employeeProtected, require("./routes/employee.route"))
app.use("*", (req, res) => {
    res.status(404).json({ message: "reource not found" })
})
// express error handler
app.use((err, req, res, next) => {
    if (err) {
        console.log(err)
        return res.status(500).json({ message: "something went wrong" })
    }
})

mongoose.connect(process.env.MONGO_URL)
mongoose.connection.once("open", () => {
    console.log("mongo connected")
    app.listen(process.env.PORT, console.log("server running"))
})
