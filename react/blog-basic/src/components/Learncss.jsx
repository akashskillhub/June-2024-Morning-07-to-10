import React from 'react'
import "./../styles.css"
const Learncss = () => {
    // ❌ do not use this approch
    const x = { color: "red", backgroundColor: "yellow" }

    // jsx =>  javaScript XML
    return <>
        <div style={{ color: "red", backgroundColor: "yellow" }}>Learncss</div>
        <h1 style={x}>hello</h1>
        <p className='dummy'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, aperiam ipsa? Placeat, dolorum! Accusantium dolorum voluptatum aspernatur nam tempora, soluta modi consectetur voluptatibus dolor eos a vitae facere veniam officia?
        </p>
    </>


}

export default Learncss