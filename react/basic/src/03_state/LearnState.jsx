import React, { useState } from 'react'

const LearnState = () => {
    const [c, setC] = useState(10)

    let count = 0

    const handleIncreemnet = () => {
        count++
        console.log(count)
        // c++ // will not work
        setC(c + 1)
    }
    return <div>
        <div>LearnState</div>
        <h1>{count}</h1>
        <h1>{c}</h1>
        <button onClick={handleIncreemnet}>inc</button>
    </div>

}

export default LearnState