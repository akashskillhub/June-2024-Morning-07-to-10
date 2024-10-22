import React from 'react'
import useSerialize from './useSerialize'

const Test = () => {
    const x = { name: "ross", age: 20 }
    const result = useSerialize(x)
    return <div>
        {/* {JSON.stringify(x, null, 2)} */}
        {result}
    </div>
}

export default Test