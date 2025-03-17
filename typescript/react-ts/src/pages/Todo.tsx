import { useState } from "react"

type Todo = {
    id: number,
    task: string,
    desc: string,
    priority: string,
    complete?: boolean,
}
const Todo = () => {
    const [notes, setNotes] = useState<Todo[]>([])
    const [sinlgeTodo, setSinlgeTodo] = useState<Todo>({
        id: 0,
        task: "",
        desc: "",
        priority: ""
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
        const { value, name } = e.target
        setSinlgeTodo({ ...sinlgeTodo, [name]: value })
    }
    const handleSubmit = () => {
        setNotes([...notes, { ...sinlgeTodo, id: notes.length }])
    }
    const handleRemove = (id: number) => {
        setNotes(notes.filter(item => item.id !== id))
    }
    return <>
        <input name="task" onChange={handleChange} type="text" placeholder="task" />
        <input name="desc" onChange={handleChange} type="text" placeholder="desc" />
        <select name="priority" onChange={handleChange} >
            <option value="high">high</option>
            <option value="medium">medium</option>
            <option value="low">low</option>
        </select>
        <button onClick={handleSubmit}>add</button>
        <hr />
        <table border={1}>
            <thead>
                <tr>
                    <th>id</th>
                    <th>task</th>
                    <th>desc</th>
                    <th>priority</th>
                    <th>complete</th>
                    <th>actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    notes.map(item => <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.task}</td>
                        <td>{item.desc}</td>
                        <td>{item.priority}</td>
                        <td>{item.complete}</td>
                        <td>
                            <button>edit</button>
                            <button onClick={() => handleRemove(item.id)}>remove</button>
                        </td>
                    </tr>)
                }
            </tbody>
        </table>
    </>
}

export default Todo