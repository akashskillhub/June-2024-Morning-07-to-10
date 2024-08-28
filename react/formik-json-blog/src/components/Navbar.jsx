import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return <>
        <p><Link to="/">Home</Link></p>
        <p><Link to="/blog">Blog</Link></p>
    </>
}

export default Navbar