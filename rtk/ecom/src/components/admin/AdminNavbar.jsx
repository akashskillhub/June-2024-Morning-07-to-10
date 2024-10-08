import React from 'react'
import { adminRoutes } from '../../routes/adminRoute'
import { Link } from 'react-router-dom'

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
                        {
                            adminRoutes.map(item => <Link to={item.path} key={item.label} className='nav-link'>
                                {item.label}
                            </Link>)
                        }
                    </div>
                </div>
            </div>
        </nav>
    </>
}

export default AdminNavbar