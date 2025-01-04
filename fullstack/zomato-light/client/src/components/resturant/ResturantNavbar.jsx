import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useResturantSignoutMutation } from '../../redux/apis/authApi'
import { toast } from 'react-toastify'
import { useSelector } from 'react-redux'

const ResturantNavbar = () => {
    const { resturant } = useSelector(state => state.auth)
    const [signout, { isSuccess }] = useResturantSignoutMutation()
    useEffect(() => {
        if (isSuccess) {
            toast.success("logout success")
        }
    }, [isSuccess])
    return <nav className="navbar navbar-expand-lg bg-success navbar-dark">
        <div className="container">
            <Link to="/resturant" className="navbar-brand" >Resturant Panel</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link to="/resturant" className="nav-link active" >dashboard</Link>
                </div>
            </div>

            <div className="dropdown">
                <button className="btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" >
                    Welcome {resturant.name}
                </button>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item">Profile</a></li>
                    <li><a className="dropdown-item">Account</a></li>
                    <li><button onClick={signout} className="dropdown-item text-danger">Logout</button></li>
                </ul>
            </div>
        </div>
    </nav>
}

export default ResturantNavbar