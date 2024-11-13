const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")

const app = express()
app.use(express.json())
app.use(cors())

app.use("/api/auth", require("./routes/auth.routes"))


mongoose.connect("mongodb://localhost:27017/morning-auth")
mongoose.connection.once("open", () => {
    console.log("MONGO CONNECTED")
    app.listen(5000, console.log("SERVER RUNNING"))
})
