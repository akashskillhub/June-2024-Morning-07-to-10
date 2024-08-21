import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const AdminLayout = () => {
    return <>
        <AdminNavbar />
        <div className="container">
            <Outlet />
        </div>
    </>

}

const AdminNavbar = () => {
    return <>
        <nav class="navbar navbar-expand-lg bg-danger navbar-dark">
            <div class="container">
                <a class="navbar-brand" href="#">Admin</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <Link to="/admin" class="nav-link active" >Dashboard</Link>
                        <Link to="/admin/products" class="nav-link" >Products</Link>
                    </div>
                </div>
                <Link to="/" class="nav-link text-light" >Back Home</Link>
            </div>
        </nav>
    </>
}

export default AdminLayout