const { addTodo, getTodo, updateTodo, deleteTodo } = require("../controllers/todo.controller")
const { userProtected } = require("../middlewares/auth.middleware")

const router = require("express").Router()

router
    .post("/create", userProtected, addTodo)
    .get("/fetch", userProtected, getTodo)
    .put("/update/:kuchbhi", userProtected, updateTodo)
    .delete("/delete/:kuchbhi", userProtected, deleteTodo)

module.exports = router