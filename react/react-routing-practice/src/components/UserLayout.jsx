import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const UserLayout = () => {
    return <>
        <UserNavbar />
        <div className="container">
            <Outlet />
        </div>
    </>
}

const UserNavbar = () => {
    return <>
        <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
            <div class="container">
                <a class="navbar-brand" href="#">Welcome John</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <Link to="/user" class="nav-link active" >Account</Link>
                        <Link to="/user/profile" class="nav-link" >Profile</Link>
                    </div>
                </div>
                <Link to="/" class="nav-link active text-light" >Back home</Link>

            </div>
        </nav>
    </>
}

export default UserLayout