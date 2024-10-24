const Todo = require("../model/Todo")

exports.getAllTodos = async (req, res) => {
    const result = await Todo.find()
    res.json({ message: "todo fetch success", result })
}
exports.addTodo = async (req, res) => {
    await Todo.create(req.body) // 👈 requires body parser
    res.json({ message: "todo add success" })
}
exports.udpateTodo = async (req, res) => {
    const { id } = req.params
    await Todo.findByIdAndUpdate(id, req.body)
    res.json({ message: "todo udpate success" })
}
exports.deleteTodo = async (req, res) => {
    const { id } = req.params
    await Todo.findByIdAndDelete(id)
    res.json({ message: "todo delete success" })
}