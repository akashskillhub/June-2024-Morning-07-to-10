import React from 'react'
import Demo from '../share/Demo'

const Practicetest = () => {
    const price = 500
    const x = "dell"
    const cart = ["keynboard", "mouse"]
    const handleClick = () => {
        console.log("clicked")
    }
    return <div>
        <div>Practicetest</div>
        <Demo tt={x} cart={cart} clickFn={handleClick} price={price}></Demo>
    </div>
}




export default Practicetest