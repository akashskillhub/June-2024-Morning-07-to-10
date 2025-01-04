import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useAdminSignoutMutation } from '../../redux/apis/authApi'
import { toast } from 'react-toastify'

const AdminNavbar = () => {
    const [signOut, { isSuccess }] = useAdminSignoutMutation()
    useEffect(() => {
        if (isSuccess) {
            toast.success("logout suceess")
        }
    }, [isSuccess])
    return <>
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
            <div className="container">
                <Link to="/admin" className="navbar-brand" >Admin</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link to="/admin" className="nav-link active" >dashboard</Link>
                    </div>
                </div>

                <div className="dropdown">
                    <button className="btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" >
                        welcome Admin
                    </button>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item">Profile</a></li>
                        <li><a className="dropdown-item">Account</a></li>
                        <li><button onClick={signOut} className="dropdown-item text-danger">Logout</button></li>
                    </ul>
                </div>
            </div>
        </nav>
    </>
}

export default AdminNavbar