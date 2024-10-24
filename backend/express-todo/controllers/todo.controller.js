const Todo = require("../models/Todo")

exports.getAllTodos = async (req, res) => {
    const result = await Todo.find()
    console.log(result)
    res.send("express todo fetch success")
}
exports.createTodo = async (req, res) => {
    await Todo.create(req.body)
    res.send("express todo create success")
}
exports.updateTodo = (req, res) => {
    const { id } = req.params
    console.log(id)
    res.send("express todo update success")
}
exports.deleteTodo = (req, res) => {
    const { id } = req.params
    res.send("express todo delete success with id " + id)
}