const { getAllTodos, createTodo, updateTodo, deleteTodo } = require("../controllers/todo.controller")
const logger = require("../middlewares/logger")

const router = require("express").Router()

router.get("/", getAllTodos)
    .post("/create", logger, createTodo)
    .put("/update/:id", logger, updateTodo)
    .delete("/delete/:id", deleteTodo)

module.exports = router
