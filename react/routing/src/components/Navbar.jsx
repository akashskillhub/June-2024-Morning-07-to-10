import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return <>
        <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
            <div class="container">
                <Link class="navbar-brand" to="/">SKILLHUB</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <Link to="/" class="nav-link active" >Home</Link>
                        <Link to="/about" class="nav-link" >About</Link>
                        <Link to="/reach-us" class="nav-link" >Conatct</Link>
                        <Link to="/admin" class="nav-link" >Dashboard</Link>
                    </div>
                </div>
            </div>
        </nav>
    </>
}

export default Navbar