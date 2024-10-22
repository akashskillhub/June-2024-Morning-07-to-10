import React, { useCallback, useMemo, useState } from 'react'

const MyuseMemo = () => {
    const [isDark, setIsDark] = useState(false)
    console.log("hello")

    // cache or memo
    const sum = useMemo(() => {
        let s = 0
        for (let i = 0; i < 10000000000; i++) {
            s += i
        }
        return s
    }, [])

    // cache / memo function
    const x = useCallback(() => {
        let s = 0
        for (let i = 0; i < 10000000000; i++) {
            s += i
        }
        return s
    }, [])
    console.log(x)

    return <div>
        <h1>{sum}</h1>
        <h1>theme {isDark ? "Dark" : "Light"}</h1>
        <button onClick={e => setIsDark(!isDark)}>toggle</button>
    </div>
}

export default MyuseMemo