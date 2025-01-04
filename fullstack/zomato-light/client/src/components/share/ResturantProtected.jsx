
import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const ResturantProtected = ({ compo }) => {
    const { resturant } = useSelector(state => state.auth)
    return resturant ? compo : <Navigate to="/login-resturant" />
}

export default ResturantProtected