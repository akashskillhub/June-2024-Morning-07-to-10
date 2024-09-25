import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../../redux/slices/authSlice'

const AdminNavbar = () => {
    const dispatch = useDispatch()
    const { admin } = useSelector(state => state.auth)
    return <>
        <nav class="navbar navbar-expand-lg bg-danger navbar-dark">
            <div class="container">
                <Link to="/admin" class="navbar-brand" >Admin Panel</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <Link to="/admin" class="nav-link active" >Dashboards</Link>
                        <Link to="/admin/bookings" class="nav-link" >Bookings</Link>
                        <Link to="/admin/patients" class="nav-link" >Patients</Link>
                        <div class="dropdown">
                            <button class="btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" >
                                Welcome {admin.name}
                            </button>
                            <ul class="dropdown-menu">
                                <li><button onClick={e => dispatch(logout("admin"))} class="dropdown-item text-danger">Logout</button></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </>
}

export default AdminNavbar