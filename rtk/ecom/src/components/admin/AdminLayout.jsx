import React from 'react'
import AdminNavbar from './AdminNavbar'
import { Outlet } from 'react-router-dom'

const AdminLayout = () => {
    return <>
        <AdminNavbar />
        <div className="container mt-3">
            <Outlet />
        </div>
    </>
}

export default AdminLayout