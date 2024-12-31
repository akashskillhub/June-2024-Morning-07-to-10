import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return <>
        <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
            <div class="container">
                <Link to="/admin" class="navbar-brand">Admin Panel</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <Link to="/admin" class="nav-link active">dashboard</Link>
                        <Link to="/admin/employee" class="nav-link">employee</Link>
                        <Link to="/admin/todo" class="nav-link">todo</Link>
                    </div>

                    <div class="dropdown">
                        <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" >
                            welcome
                        </button>
                        <ul class="dropdown-menu">
                            <li><button class="dropdown-item text-danger">Logout</button></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    </>
}

export default Navbar