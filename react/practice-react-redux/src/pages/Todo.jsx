import React from 'react'
import { handleAddTodo, handleDeleteTodo } from '../redux/actions/todoActions'
import { useSelector } from 'react-redux'

const Todo = () => {
    const { notes } = useSelector(state => state.todos)
    return <>
        <button onClick={handleAddTodo}>Add Todo</button>
        {
            notes.map(item => <div>
                <h1>{item}</h1>
                <button onClick={handleDeleteTodo}>delete</button>
            </div>)
        }
    </>
}

export default Todo