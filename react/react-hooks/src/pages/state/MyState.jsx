import React, { useState } from 'react'

const MyState = () => {
    let [count, setCount] = useState(0)
    const inc = () => {
        setCount(count + 1) // 0+1
        setCount(count + 1) // 0+1
        setCount(count + 1) // 0+1

        // setCount(pre => pre + 1) // 0+1
        // setCount(pre => pre + 1) // 1+1
        // setCount(pre => pre + 1) // 2+1

    }
    const dec = () => {
        setCount(count - 1)
    }
    return <>
        <button onClick={dec}>-1</button>
        <h1>count = {count}</h1>
        <button onClick={inc}>+1</button>
    </>
}

export default MyState