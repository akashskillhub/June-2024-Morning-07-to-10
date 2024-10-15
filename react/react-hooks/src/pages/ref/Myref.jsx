import React, { useEffect, useRef } from 'react'

const Myref = () => {
    const test = useRef()
    const demo = useRef()

    useEffect(() => {
        console.log(test.current)
    }, [])
    return <div>
        reg
        <h1 ref={test}>hello</h1>

        <input type="file" ref={demo} style={{ display: "none" }} />
        <div
            onClick={e => demo.current.click()}
            style={{ height: 200, border: "5px dashed red" }}></div>
    </div>
}

// performance => useCallback, useMemo , memo

export default Myref