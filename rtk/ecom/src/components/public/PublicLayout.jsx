import React from 'react'
import PublicNavbar from './PublicNavbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

const PublicLayout = () => {
    return <>
        <PublicNavbar />
        <div className="container mt-3">
            <Outlet />
        </div>
        <Footer />
    </>
}

export default PublicLayout