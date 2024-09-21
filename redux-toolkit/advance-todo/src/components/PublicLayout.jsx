import React from 'react'
import PublicNavbar from './PublicNavbar'
import { Outlet } from 'react-router-dom'

const PublicLayout = () => {
    return <>
        <PublicNavbar />
        <div className="container mt-3">
            <Outlet />
        </div>
    </>
}

export default PublicLayout