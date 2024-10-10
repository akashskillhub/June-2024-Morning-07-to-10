import React from 'react'
import { adminRoutes } from '../../routes/adminRoute'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logoutAdmin } from '../../redux/slices/authSlice'

const AdminNavbar = () => {
    const { admin } = useSelector(state => state.auth)
    const dispatch = useDispatch()
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
                    <div class="dropdown ms-auto">
                        <button class="btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" >
                            {admin.name}
                        </button>
                        <ul class="dropdown-menu">
                            {
                                adminRoutes.map(item => <Link to={item.path} key={item.label} className='dropdown-item'>
                                    {item.label}
                                </Link>)
                            }
                            <button onClick={e => dispatch(logoutAdmin())} className='dropdown-item text-danger'>Logout</button>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    </>
}

export default AdminNavbar