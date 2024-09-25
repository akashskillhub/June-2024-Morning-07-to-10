import React from 'react'
import PublicNavbar from './PublicNavbar'
import { Link, Outlet } from 'react-router-dom'

const PublicLayout = () => {
    return <>
        <PublicNavbar />
        <div className="container">
            <Outlet />
        </div>

        <div className='bg-light p-5'>
            <div className="container">
                <div className="row">
                    <div className="col-sm-4">
                        <Link to="/" className='nav-link fs-4'>Practo - lite</Link>
                    </div>
                    <div className="col-sm-8">
                        <Link to="/admin-login" className='nav-link'>Admin</Link>
                        <Link to="/patient-register" className='nav-link'>Patient Register</Link>
                    </div>
                </div>
            </div>
        </div>
    </>
}



export default PublicLayout