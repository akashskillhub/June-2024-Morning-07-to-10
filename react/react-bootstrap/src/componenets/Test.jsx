import React from 'react'

const Test = ({ children, varient }) => {
    return <>
        <button className={`btn btn-${varient}`}>{children}</button>
    </>
}

export default Test