import React from 'react'
import { Outlet } from 'react-router-dom'

const AdminLayout = () => {
    return <>
        <p>Hello admin</p>
        <Outlet />
    </>
}

export default AdminLayout