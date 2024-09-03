import React, { useEffect, useState } from 'react'

const Counter = () => {
    let x = 0
    const [count, setCount] = useState(0)
    const [isDark, setIsDark] = useState(false)
    useEffect(() => {
        console.log("Effect")
        return () => console.log("cleanup")
    }, [count, isDark])
    return <>
        <div>Counter</div>
        <h1>{x}</h1>
        <h1>{count}</h1>
        <button onClick={e => {
            ++x;
            console.log(x)
            setCount(count + 1)
        }}>+1</button>
        <h1>Theme = {isDark ? "Dark" : "light"}</h1>
        <button onClick={e => setIsDark(!isDark)}>Toogle Theme</button>
    </>

}

export default Counter