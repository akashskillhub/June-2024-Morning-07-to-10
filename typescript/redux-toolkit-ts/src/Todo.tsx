import { useEffect, useState } from "react"
import { Note } from "./types/Todo"
import { createTodo, getTodos } from "./redux/todo.actions"

import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"
import { AppDispatch, AppSelector } from "./redux/store"

const useAppDispatch: () => AppDispatch = useDispatch

const useAppSelector: TypedUseSelectorHook<AppSelector> = useSelector

const Todo = () => {
    const dispatch = useAppDispatch()
    const {
        createSuccess,
        deleteSuccess,
        error,
        loading,
        todos,
        updateSuccess
    } = useAppSelector(state => state.todos)

    const [todoData, setTodoData] = useState<Note>({
        task: "",
        desc: "",
        priority: ""
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
        const { value, name } = e.target
        setTodoData({ ...todoData, [name]: value })
    }
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        dispatch(createTodo(todoData))
    }

    useEffect(() => {
        dispatch(getTodos())
    }, [])

    useEffect(() => {
        if (createSuccess) {
            console.log("createSuccess");
            dispatch(getTodos())
        }
    }, [createSuccess])
    useEffect(() => {
        if (updateSuccess) {
            console.log("updateSuccess");
            dispatch(getTodos())
        }
    }, [updateSuccess])
    useEffect(() => {
        if (deleteSuccess) {
            console.log("deleteSuccess");
            dispatch(getTodos())
        }
    }, [deleteSuccess])
    if (loading) {
        return <h1>Loading wait ....</h1>
    }
    return <>
        <form onSubmit={handleSubmit} >
            <input onChange={handleChange} name="task" type="text" placeholder="task" />
            <input onChange={handleChange} name="desc" type="text" placeholder="desc" />
            <select onChange={handleChange} name="priority" >
                <option disabled selected>Choose Priority</option>
                <option value="high">high</option>
                <option value="medium">medium</option>
                <option value="low">low</option>
            </select>
            <button>add</button>
        </form>

        {
            todos && <table border={1}>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>task</th>
                        <th>desc</th>
                        <th>priority</th>
                        <th>actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        todos.map(item => <tr>
                            <td>{item._id}</td>
                            <td>{item.task}</td>
                            <td>{item.desc}</td>
                            <td>{item.priority}</td>
                            <td>
                                <button>edit</button>
                                <button>remove</button>
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
        }
    </>
}

export default Todo