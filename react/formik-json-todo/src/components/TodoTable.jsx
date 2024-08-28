import axios from "axios"
import { useEffect, useState } from "react"
import TodoForm from "./TodoForm"

const TodoTable = ({ success, toggleFn }) => {
    const [selectedTodo, setSelectedTodo] = useState()
    const [allTodos, setAllTodos] = useState([])
    const deleteTodo = async id => {
        await axios.delete("http://localhost:5000/notes/" + id)
        readNotes()
    }
    const readNotes = async () => {
        const { data } = await axios.get("http://localhost:5000/notes")
        setAllTodos(data)
    }
    useEffect(() => {
        readNotes()
    }, [success])
    return <>
        <table className='table table-bordered table-dark mt-3'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Task</th>
                    <th>Desc</th>
                    <th>Priority</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    allTodos.map(item => <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.task}</td>
                        <td>{item.desc}</td>
                        <td>{item.priority}</td>
                        <td>
                            <button
                                data-bs-toggle="modal"
                                data-bs-target="#edit"
                                onClick={e => setSelectedTodo(item)}
                                className='mx-2 btn btn-sm btn-outline-warning'>edit</button>
                            <button
                                onClick={e => deleteTodo(item.id)}
                                className='mx-2 btn btn-sm btn-outline-danger'>delete</button>
                        </td>
                    </tr>)
                }
            </tbody>
        </table>

        <div class="modal fade" id="edit" >
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Edit Todo</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <TodoForm selectedTodo={selectedTodo} toggleFn={toggleFn} />
                    </div>
                </div>
            </div>
        </div>


    </>
}

export default TodoTable