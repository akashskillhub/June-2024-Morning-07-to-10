import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return <>
        <span>Navbar</span>
        <Link to="/"> Home</Link>
        <Link to="/counter"> Counter</Link>
    </>

}

export default Navbar