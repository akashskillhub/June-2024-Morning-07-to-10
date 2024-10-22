import React, { useState } from 'react'
import Card from './Card'

const MyOnlyMemo = () => {
    const [count, setCount] = useState(0)
    const [todos, setTodos] = useState(["task 1", "task 2"])
    return <div>
        <h1>count= {count}</h1>
        <div>MyOnlyMemo</div>
        <Card data={todos} />
        <button onClick={e => setTodos([...todos, "dummy task"])}>add</button>

        <button onClick={e => setCount(count + 1)}>addd</button>
    </div>

}

export default MyOnlyMemo