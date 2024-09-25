import React from 'react'
import EmployeeNavbar from './EmployeeNavbar'
import { Outlet } from 'react-router-dom'

const EmployeeLayout = () => {
    return <>
        <EmployeeNavbar />
        <Outlet />
    </>
}

export default EmployeeLayout