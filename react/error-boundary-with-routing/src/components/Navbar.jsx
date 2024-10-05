import React from 'react'
import { Link } from 'react-router-dom'
import { allRoutes } from '../share/routes'

const Navbar = () => {
    return <>
        <nav className="navbar navbar-expand-lg bg-danger mb-2 navbar-dark">
            <div className="container">
                <Link to="/" className="navbar-brand">Error-Boundary</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        {
                            allRoutes.map(item => <Link key={item.label} to={item.path} className='nav-link'>{item.label}</Link>)
                        }
                    </div>
                </div>
            </div>
        </nav>
    </>
}

export default Navbar