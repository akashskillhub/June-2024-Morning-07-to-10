import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const PublicLayout = () => {
    return <>
        <PublicNavbar />
        <div className='container'>
            <Outlet />
        </div>
    </>

}

const PublicNavbar = () => {
    return <>
        <nav class="navbar navbar-expand-lg bg-primary navbar-dark">
            <div class="container">
                <a class="navbar-brand" href="#">SKILLHUB</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <Link to="/" class="nav-link active" >Home</Link>
                        <Link to="/contact" class="nav-link" >Contact</Link>
                    </div>
                </div>
                <div class="dropdown">
                    <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" >
                        Accounts
                    </button>
                    <ul class="dropdown-menu">
                        <li><Link to="/admin" class="dropdown-item" >Admin</Link></li>
                        <li><Link to="/user" class="dropdown-item" >User</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    </>
}

export default PublicLayout