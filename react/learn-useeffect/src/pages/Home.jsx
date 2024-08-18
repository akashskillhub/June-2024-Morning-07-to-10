import React, { useEffect, useState } from 'react'

const Home = () => {
    const [dummy, setDummy] = useState(true)
    const [count, setCount] = useState(0)

    useEffect(() => {
        // page load👇
        console.log("effect")
    }, [count, dummy])
    // 👆 dependancy array
    return <>
        <div>Home</div>
        <h1>{count}</h1>
        <button onClick={e => setCount(count + 1)}>+1</button>
        <button onClick={e => setCount(10)}>set 10</button>

        <button onClick={e => setDummy(!dummy)}>dummy</button>


    </>

}

export default Home