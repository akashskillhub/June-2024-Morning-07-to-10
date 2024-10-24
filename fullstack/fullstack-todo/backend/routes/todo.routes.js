const { getAllTodos, addTodo, udpateTodo, deleteTodo } = require("../controllers/todo.controller")

const router = require("express").Router()

router
    .get("/", getAllTodos)
    .post("/create", addTodo)
    .put("/update/:id", udpateTodo)
    .delete("/delete/:id", deleteTodo)

module.exports = router