import React from 'react'
import { customerRoutes } from '../../routes/customerRoute'
import { Link } from 'react-router-dom'

const CustomerNavbar = () => {
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
                            customerRoutes.map(item => <Link to={item.path} key={item.label} className='nav-link'>
                                {item.label}
                            </Link>)
                        }
                    </div>
                </div>
            </div>
        </nav>
    </>
}

export default CustomerNavbar