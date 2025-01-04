import React from 'react'
import PublicNavbar from './PublicNavbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

const PublicLayout = () => {
    return <>
        <PublicNavbar />
        <Outlet />
        <Footer />
    </>
}

export default PublicLayout