import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return <>
        <nav class="navbar navbar-expand-lg bg-danger navbar-dark mb-5">
            <div class="container">
                <a class="navbar-brand" href="#">RTK Blog</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <Link class="nav-link" to="/">Home</Link>
                        <Link class="nav-link" to="/blog">Blog</Link>
                    </div>
                </div>
            </div>
        </nav>
    </>
}

export default Navbar