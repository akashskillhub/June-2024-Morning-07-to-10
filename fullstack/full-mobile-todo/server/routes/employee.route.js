const { readEmployeeTodo, completeEmployeeTodo } = require("../controllers/employee.controller")

const router = require("express").Router()

router
    .get("/read/todos", readEmployeeTodo)
    .put("/update/todo/:tid", completeEmployeeTodo)
module.exports = router