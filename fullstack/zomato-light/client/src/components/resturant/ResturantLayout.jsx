import React from 'react'
import ResturantNavbar from './ResturantNavbar'
import { Outlet } from 'react-router-dom'

const ResturantLayout = () => {
    return <>
        <ResturantNavbar />
        <Outlet />
    </>
}

export default ResturantLayout