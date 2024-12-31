import React, { useEffect, useState } from 'react'
import { useCreateAdminTodoMutation, useGetAdminEmployeeQuery, useLazyGetAdminTodosQuery } from '../redux/adminApi'
import io from "socket.io-client"
const socket = io(import.meta.env.VITE_BACKEND_URL)

const Todo = () => {


    const { data } = useGetAdminEmployeeQuery()
    const [todoData, setTodoData] = useState([])
    const [addTodo, { isSuccess }] = useCreateAdminTodoMutation()
    const handleChange = e => {
        const { name, value } = e.target
        setTodoData({ ...todoData, [name]: value })
    }

    return <>
        <div class="container">
            <div class="row">
                <div class="col-sm-6 offset-sm-3">
                    <div class="card">
                        <div class="card-header">Todo</div>
                        <div class="card-body">
                            <div>
                                <select className='form-control' name='employee' onChange={handleChange}>
                                    <option selected disabled>choose employee</option>
                                    {
                                        data && data.result.map(item => <option value={item._id}>{item.name}</option>)
                                    }
                                </select>
                            </div>
                            <div>
                                <label for="task" class="form-label">First task</label>
                                <input
                                    name='task' onChange={handleChange}
                                    type="text"
                                    class="form-control"
                                    id="task"
                                    placeholder="Enter Your task"
                                />
                                <div class="valid-feedback">Looks good!</div>
                                <div class="invalid-feedback">Please add task.</div>
                            </div>
                            <div class="mt-2">
                                <label for="desc" class="form-label">Description</label>
                                <input
                                    name='desc' onChange={handleChange}
                                    type="text"
                                    class="form-control"
                                    id="desc"
                                    placeholder="Enter task description"
                                />
                                <div class="valid-feedback">Looks good!</div>
                                <div class="invalid-feedback">Please add description</div>
                            </div>
                            <div class="mt-2">
                                <label for="priority"> Priority</label>
                                <select class="form-select" id="priority" name='priority' onChange={handleChange}>
                                    <option selected>Select Priority</option>
                                    <option value="high">High</option>
                                    <option value="medium">Medium</option>
                                    <option value="low">Low</option>
                                </select>
                            </div>
                            <button onClick={e => addTodo(todoData)} type="button" class="btn btn-primary w-100 mt-3">
                                Add Todo
                            </button>
                        </div>
                    </div>

                    {/* table goes here */}
                    <TodoTable />
                </div>
            </div>
        </div>


    </>
}


const TodoTable = () => {
    const [getTodos, { data }] = useLazyGetAdminTodosQuery()

    socket.on("create-todo", data => {
        getTodos()
    })
    useEffect(() => { getTodos() }, [])
    return data && <table className='table table-bordered mt-5'>
        <thead>
            <tr>
                <th>employee</th>
                <th>task</th>
                <th>desc</th>
                <th>priority</th>
                <th>complete</th>
            </tr>
        </thead>
        <tbody>
            {
                data.result.map(item => <tr className={`${item.isComplete ? "table-success" : "table-danger"}`}>
                    <td>{item.employee.name}</td>
                    <td>{item.task}</td>
                    <td>{item.desc}</td>
                    <td>{item.priority}</td>
                    <td>{item.isComplete ? "Yes" : "No"}</td>
                </tr>)
            }
        </tbody>
    </table>
}
export default Todo