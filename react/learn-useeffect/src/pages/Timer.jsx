import React, { useEffect, useState } from 'react'

const Timer = () => {
    const [today, setToday] = useState()

    useEffect(() => {
        const x = setInterval(() => {
            console.log("call")
            setToday(new Date())
        }, 1000);
        return () => { clearInterval(x) }
    }, [])
    return <>
        <h1>{JSON.stringify(today)}</h1>
        <div>Timer</div>
    </>

}

export default Timer