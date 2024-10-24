const express = require("express")
const mongoose = require("mongoose")

const app = express()
app.use(express.json()) // body parser middleware
app.use("/todos", require("./routes/todo.routes"))

mongoose.connect("mongodb://localhost:27017/morning-todo") // local connection

mongoose.connection.once("open", () => {
    console.log("mongo connected")
    app.listen(5000, console.log("server running"))
})

