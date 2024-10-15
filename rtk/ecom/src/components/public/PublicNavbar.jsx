import React from 'react'
import { publicRoutes } from '../../routes/publicRoute'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logoutCustomer } from '../../redux/slices/authSlice'

const PublicNavbar = () => {
    const { customer } = useSelector(state => state.auth)
    const { cart } = useSelector(state => state.publicCart)
    const dispatch = useDispatch()
    return <>
        <nav className="navbar navbar-expand-lg bg-primary navbar-dark">
            <div className="container">
                <a className="navbar-brand" href="#">E Com</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        {
                            customer
                                ? publicRoutes.map(item => item.showNavbar && item.showWhileLogin && <Link key={item.label} className='nav-link' to={item.path}>
                                    {item.label}
                                </Link>)
                                : publicRoutes.map(item => item.showNavbar && <Link key={item.label} className='nav-link' to={item.path}>
                                    {item.label}
                                </Link>)

                        }
                    </div>
                    {
                        customer && <div className='ms-auto d-flex gap-2'>
                            <Link to="/cart" type="button" class="btn btn-outline-light">
                                <i className="bi bi-cart"></i> {cart.length}
                            </Link>
                            <div class="dropdown ">
                                <button class="btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" >
                                    {customer.name}
                                </button>
                                <ul class="dropdown-menu">
                                    <li><Link to="/customer" class="dropdown-item">Account</Link></li>
                                    <li><Link to="/customer/profile" class="dropdown-item">Profile</Link></li>
                                    <li><button onClick={e => dispatch(logoutCustomer())} class="dropdown-item text-danger">Logout</button></li>
                                </ul>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </nav>
    </>
}

export default PublicNavbar