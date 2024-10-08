import React from 'react'
import CustomerNavbar from './CustomerNavbar'
import { Outlet } from 'react-router-dom'

const CustomerLayout = () => {
    return <>
        <CustomerNavbar />
        <div className="container mt-3">
            <Outlet />
        </div>
    </>
}

export default CustomerLayout