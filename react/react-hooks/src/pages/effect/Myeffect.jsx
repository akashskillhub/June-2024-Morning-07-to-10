import React, { useEffect, useState } from 'react'

const Myeffect = () => {
    const [count, setCount] = useState(0)
    useEffect(() => {
        console.log("effect") // 1 Mount, 2 change in dependancy array 
        return () => {
            console.log("cleanup") // 1 Unmount, 2 change in dependancy array 
        }
    }, [count])
    return <>
        <h1>{count}</h1>
        <h1>effect</h1>
        <button onClick={e => setCount(count + 1)}>change</button>
    </>
}

export default Myeffect