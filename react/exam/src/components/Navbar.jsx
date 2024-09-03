import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return <nav className="navbar navbar-expand-lg bg-dark navbar-dark mb-5">
        <div className="container">
            <Link to="/" className="navbar-brand">Exam</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link to="/" className="nav-link active" >Calculator</Link>
                    <Link to="/employee" className="nav-link" >Employee</Link>
                </div>
            </div>
        </div>
    </nav>
}

export default Navbar