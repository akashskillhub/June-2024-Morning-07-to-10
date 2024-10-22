const express = require("express")
const { getTodos, createTodo } = require("./controllers/todo.controller")
const { getAllUsers } = require("./controllers/user.controller")
const app = express()

app.use("/", require("./routes/todo.route"))
app.use("/users", require("./routes/user.route"))

app.use("*", (req, res) => {
    res.send("Not Found 404")
})
app.listen(5000, console.log("App Running on 5000"))