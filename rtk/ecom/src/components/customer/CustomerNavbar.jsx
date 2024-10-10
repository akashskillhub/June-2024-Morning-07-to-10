import React from 'react'
import { customerRoutes } from '../../routes/customerRoute'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logoutCustomer } from '../../redux/slices/authSlice'

const CustomerNavbar = () => {
    const { customer } = useSelector(state => state.auth)
    const dispatch = useDispatch()
    return <>
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
            <div className="container">
                <a className="navbar-brand" href="#">Account</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        {
                            customerRoutes.map(item => <Link to={item.path} key={item.label} className='nav-link text-uppercase'>
                                {item.label}
                            </Link>)
                        }
                    </div>
                    <div class="dropdown ms-auto">
                        <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" >
                            Welcome <span className='text-uppercase'> {customer.name}</span>
                        </button>
                        <ul class="dropdown-menu">
                            <li><Link to="/customer" class="dropdown-item" >Account</Link></li>
                            <li><Link to="/customer/profile" class="dropdown-item" >Profile</Link></li>
                            <li><button onClick={e => dispatch(logoutCustomer())} class="dropdown-item text-danger" >Logout</button></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    </>
}

export default CustomerNavbar