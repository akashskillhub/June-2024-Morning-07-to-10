import React from 'react'
import AdminNavbar from './AdminNavbar'
import AdminSidebar from './AdminSidebar'
import { Outlet } from 'react-router-dom'

const AdminLayout = () => {
    return <>
        <AdminNavbar />
        <AdminSidebar />
        <div style={{ marginLeft: "200px" }}>
            <Outlet />
        </div>
    </>
}

export default AdminLayout