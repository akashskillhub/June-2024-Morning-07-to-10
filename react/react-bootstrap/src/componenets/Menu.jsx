import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
    return <div className='d-flex gap-2'>
        <Link to="/" className='nav-link' >button</Link>
        <Link to="/alert" className='nav-link' >alert</Link>
        <Link to="/collapse" className='nav-link' >collapse</Link>
        <Link to="/offcanvas" className='nav-link' >offcanvas</Link>
        <Link to="/modal" className='nav-link' >modal</Link>
        <Link to="/grid" className='nav-link' >grid</Link>
        <Link to="/form" className='nav-link' >form</Link>
    </div>
}
export default Menu