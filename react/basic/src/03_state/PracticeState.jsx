import React, { useState } from 'react'

const PracticeState = () => {
    const [count, setCount] = useState(0) //React Hook

    const inc = () => { setCount(count === 5 ? 5 : count + 1) }
    const dec = () => { setCount(count === 0 ? 0 : count - 1) }
    const reset = () => { setCount(0) }
    return <div>
        <div>PracticeState</div>
        <h1>count = {count}</h1>

        <button onClick={inc}>+1</button>
        <button onClick={dec}>-1</button>
        <button onClick={reset}>reset</button>
    </div>

}

export default PracticeState