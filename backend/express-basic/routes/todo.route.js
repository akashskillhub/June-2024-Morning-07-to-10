const { getTodos, createTodo } = require("../controllers/todo.controller")

const router = require("express").Router()
router.get("/notes", getTodos)
router.post("/notes", createTodo)

module.exports = router // default  export
// export default router