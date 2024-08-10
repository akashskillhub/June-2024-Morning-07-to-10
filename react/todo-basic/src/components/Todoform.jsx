import React, { useState } from 'react'

const Todoform = () => {
    const [task, setTask] = useState()
    const [todos, setTodos] = useState([])

    const handleAdd = () => {
        setTodos([...todos, task])
    }

    const handleDelete = arg => {
        // console.log(arg)
        // const x = todos.filter(item => item !== arg)
        // console.log(x)
        // setTodos(x)
        setTodos(todos.filter(item => item !== arg))

    }
    return <div>
        <input type="text" onChange={e => setTask(e.target.value)} />
        <button onClick={handleAdd}>add</button>
        <hr />
        <table border={1}>
            <thead>
                <tr>
                    <th>task</th>
                    <th>actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    todos.map(item => <tr key={item}>
                        <td>{item}</td>
                        <td>
                            <button onClick={e => handleDelete(item)}>delete</button>
                        </td>
                    </tr>)
                }
            </tbody>
        </table>
    </div>
}

export default Todoform