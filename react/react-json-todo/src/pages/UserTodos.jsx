import axios from 'axios'
import React, { useEffect, useState } from 'react'

const UserTodos = () => {
    const [allNotes, setAllNotes] = useState([])
    const [todoData, setTodoData] = useState({})
    const handleChange = e => {
        const { value, name, type } = e.target
        setTodoData({ ...todoData, [name]: value })
    }

    const createNote = async () => {
        try {
            await axios.post("http://localhost:5000/notes", todoData)
            console.log("Note create success")
            readNotes()
        } catch (error) {
            console.log(error)
        }
    }
    const readNotes = async () => {
        try {
            const { data } = await axios.get("http://localhost:5000/notes")
            console.log(data)
            setAllNotes(data)
        } catch (error) {
            console.log(error)
        }
    }

    const deleteNote = async id => {
        try {
            await axios.delete(`http://localhost:5000/notes/${id}`)
            console.log("delete success")
            readNotes()
        } catch (error) {
            console.log(error)
        }
    }

    const updateNote = async id => {
        try {
            await axios.patch(`http://localhost:5000/notes/${id}`, { task: "updated task" })
            console.log("update success")
            readNotes()
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        readNotes()
    }, [])
    return <>
        <pre>{JSON.stringify(todoData, null, 2)}</pre>
        <input name="task" onChange={handleChange} type="text" placeholder='Enter Task' />
        <input name="desc" onChange={handleChange} type="text" placeholder='Enter Desc' />
        <button onClick={createNote}>Add Note</button>

        <table>
            <thead>
                <tr>
                    <th>id</th>
                    <th>task</th>
                    <th>desc</th>
                    <th>actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    allNotes.map(item => <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.task}</td>
                        <td>{item.desc}</td>
                        <td>
                            <button onClick={() => updateNote(item.id)}>edit</button>
                            <button onClick={() => deleteNote(item.id)}>delete</button>
                        </td>
                    </tr>)
                }
            </tbody>
        </table>

    </>
}

export default UserTodos