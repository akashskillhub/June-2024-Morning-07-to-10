import axios from 'axios'
import React from 'react'

const Todo = () => {

    // CRUD

    // Create (add)  => post          url and body
    // Read          => get           url
    // Update        => put/ptach     url+id  and body
    // Delete        => delete        url+id


    const createTodo = async () => {
        try {
            await axios.post("http://localhost:5000/notes", { task: "learn react" })
            console.log("todo crteate success")
        } catch (error) {
            console.log(error)
        }
    }
    const readTodos = async () => {
        try {
            const { data } = await axios.get("http://localhost:5000/notes")
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }
    const updateTodo = async () => {
        try {
            await axios.put("http://localhost:5000/notes/2", { task: "learn react redux" })
            console.log("update success")
        } catch (error) {
            console.log(error)

        }
    }
    const deleteTodo = async () => {
        try {
            await axios.delete("http://localhost:5000/notes/2")
            console.log("delete success")
        } catch (error) {
            console.log(error)
        }
    }
    return <>
        <button onClick={createTodo}>create</button>
        <button onClick={readTodos}>read</button>
        <button onClick={updateTodo}>update</button>
        <button onClick={deleteTodo}>delete</button>
    </>
}

export default Todo