import React from 'react'
import PatientNavbar from './PatientNavbar'
import { Outlet } from 'react-router-dom'

const PatientLayout = () => {
    return <>
        <PatientNavbar />
        <div className="container">
            <Outlet />
        </div>
    </>
}

export default PatientLayout