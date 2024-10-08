import React from 'react'
import { publicRoutes } from '../../routes/publicRoute'
import { Link } from 'react-router-dom'

const PublicNavbar = () => {
    return <>
        <nav className="navbar navbar-expand-lg bg-primary navbar-dark">
            <div className="container">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        {
                            publicRoutes.map(item => item.showNavbar && <Link key={item.label} className='nav-link' to={item.path}>
                                {item.label}
                            </Link>)
                        }
                    </div>
                </div>
            </div>
        </nav>
    </>
}

export default PublicNavbar