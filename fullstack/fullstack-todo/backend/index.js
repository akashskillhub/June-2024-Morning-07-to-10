const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const app = express() // create server
app.use(express.json()) // body parser
app.use(cors({ origin: "http://localhost:5173" }))
app.use("/notes", require("./routes/todo.routes"))

mongoose.connect("mongodb://localhost:27017/aaa-morning-fullstack-todo")

mongoose.connection.once("open", () => {
    console.log("mongo connected")
    app.listen(5000, console.log("server running ..."))
})