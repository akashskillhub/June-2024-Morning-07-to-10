import React from 'react'
import { Outlet } from 'react-router-dom'

const UserLayout = () => {
    return <>
        <h1>hello user</h1>
        <Outlet />
    </>
}

export default UserLayout