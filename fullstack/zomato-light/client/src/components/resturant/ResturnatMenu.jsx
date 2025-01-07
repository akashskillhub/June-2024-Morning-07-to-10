import React, { useState } from 'react'

// category => select
// name
// price
// desc
// image
const ResturnatMenu = () => {
    const [menu, setMenu] = useState([1])
    return <>
        <div className="container">
            <button onClick={e => setMenu([...menu, menu.length])}>add</button>
            {
                menu.map(item => <div>
                    <input type="text" className='my-2' />
                    <input type="text" className='my-2' />
                    <button>remove</button>
                </div>)
            }
        </div>
    </>
}

export default ResturnatMenu