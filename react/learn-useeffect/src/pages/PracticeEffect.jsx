import React, { useEffect, useState } from 'react'

const PracticeEffect = () => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        // 👇mount
        console.log("effect ran")
        return () => {
            // Cleanup Function
            console.log("CLEANUP")
        }
    }, [count])
    return <>
        <div>PracticeEffect</div>
        <h1>{count}</h1>
        <button onClick={e => setCount(count + 1)}>+1</button>
    </>

}

/*
                    First Ran           Next time
    effect          mount               change in dependancy (preferance 2nd)
    cleanup         unmount             change in dependancy (preferance 1st)

*/

export default PracticeEffect