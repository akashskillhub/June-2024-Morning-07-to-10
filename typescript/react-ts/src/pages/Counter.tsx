import { useState } from "react"

const Counter = () => {
    const [count, setCount] = useState<number>(10)
    return <>
        <h1>{count}</h1>
        <button onClick={e => setCount(count + 1)}>+1</button>
    </>
}

export default Counter