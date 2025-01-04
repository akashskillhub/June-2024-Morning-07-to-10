import React from 'react'
import { Link } from 'react-router-dom'

const PublicNavbar = () => {
    return <>
        <nav className="navbar navbar-expand-lg bg-danger navbar-dark">
            <div className="container">
                <Link to="/" className="navbar-brand">Zomato Lite</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link to="/" className="nav-link active">Add Resturant</Link>
                        <Link to="/login-resturant" className="nav-link">Login</Link>
                        <Link to="/register-resturant" className="nav-link">Register</Link>
                    </div>
                </div>
            </div>
        </nav>
    </>
}

export default PublicNavbar