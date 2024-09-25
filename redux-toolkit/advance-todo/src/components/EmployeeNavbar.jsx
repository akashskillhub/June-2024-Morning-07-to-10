import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../redux/authSlice'

const EmployeeNavbar = () => {
    const { loggedInUser } = useSelector(state => state.auth)
    const dispatch = useDispatch()
    return <nav class="navbar navbar-expand-lg bg-danger navbar-dark">
        <div class="container">
            <a class="navbar-brand" href="#">Account</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <div class="dropdown">
                        <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" >
                            Welcome {loggedInUser.name}
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><button onClick={e => dispatch(logout("employee"))} class="dropdown-item" >Logout</button></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </nav>
}

export default EmployeeNavbar