import React, { useReducer, useState } from 'react'

const todoReducer = (state, { type, payload }) => {
    switch (type) {
        case "ADD_TODO": return { alltodos: [...state.alltodos, payload] }
        case "DELETE_TODO": return { alltodos: state.alltodos.filter(item => item !== payload) }
        default: return state
    }
}

const Myreducer = () => {
    const [{ alltodos }, dispatch] = useReducer(todoReducer, { alltodos: [] })
    const [task, settask] = useState()
    return <>
        <input type="text" onChange={e => settask(e.target.value)} />
        <button onClick={e => dispatch({ type: "ADD_TODO", payload: task })}>add</button>
        <hr />
        {
            alltodos.map(item => <div key={item}>
                {item} <button>edit</button>
                <button onClick={e => dispatch({ type: "DELETE_TODO", payload: item })}>delete</button>
            </div>)
        }


    </>
}

export default Myreducer