import React, { useState } from 'react'

const Test = () => {
    // dynamic keys
    const [data, setData] = useState({})
    const handleChange = e => {
        console.log(e.target.name)
        console.log(e.target.value)
        setData({ ...data, [e.target.name]: e.target.value })

    }
    return <>

        <pre>{JSON.stringify(data, null, 2)}</pre>
        <input
            type="text"
            name='title'
            onChange={handleChange} />
        <input
            name='desc'
            type="text"
            onChange={handleChange} />
        <input
            name='hero'
            type="text"
            onChange={handleChange} />
    </>
}

export default Test