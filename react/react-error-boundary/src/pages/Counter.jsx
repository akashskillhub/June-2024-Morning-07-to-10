import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)
    return <>
        <hr />

        <h1>Counter</h1>
        <button onClick={e => setCount(count - 1)}>-1</button>
        <h1>count = {count}</h1>
        <button onClick={e => setCount(count === 5 ? {} : count + 1)}>+1</button>
        <hr />
    </>
}

export default Counter