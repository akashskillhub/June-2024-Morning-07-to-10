const express = require("express")
const app = express() // create server
app.use("/articles", require("./routes/blog.route")) // middleware
app.listen(5000, console.log("server running..."))