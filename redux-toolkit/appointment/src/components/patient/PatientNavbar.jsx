import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../../redux/slices/authSlice'

const PatientNavbar = () => {
    const { patient } = useSelector(state => state.auth)
    const dispatch = useDispatch()
    return <>
        <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
            <div class="container">
                <Link to="/patient" class="navbar-brand" >Patient Panel</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <Link to="/patient/" class="nav-link" >Account</Link>
                        <Link to="/patient/history" class="nav-link" >History</Link>
                        <div class="dropdown">
                            <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" >
                                Welcome {patient.name}
                            </button>
                            <ul class="dropdown-menu">
                                <li><button onClick={e => dispatch(logout("patient"))} class="dropdown-item text-danger">Logout</button></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </>
}

export default PatientNavbar