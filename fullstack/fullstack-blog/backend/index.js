const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const app = express()
// app.use(cors()) // from anywhere
app.use(cors({ origin: "http://localhost:5173" }))
app.use(express.json()) // body parser
//          👇 same as in frontend blogApi.js -> baseURL
app.use("/articles", require("./routes/articles.routes"))

mongoose.connect("mongodb://localhost:27017/morining-articles")
mongoose.connection.once("open", () => {
    console.log("Mongo Connected")
    app.listen(5000, console.log("server running..."))
})