import React from 'react'

const layout = ({ children }) => {
    return <>
        <div className='bg-green-400 p-4'>admin navabr</div>
        {children}
    </>
}

export default layout