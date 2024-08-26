import React from 'react'

const Home = () => {
    return <>
        <TodoForm />
    </>
}

const TodoForm = () => {
    return <form>
        <input type="text" />
        <input type="text" />
        <select >
            <option selected disabled>Choose Priority</option>
            <option value="1">High</option>
            <option value="2">Meduim</option>
            <option value="3">Low</option>
        </select>
        <button type='submit'>Add Todo</button>
    </form>
}

export default Home