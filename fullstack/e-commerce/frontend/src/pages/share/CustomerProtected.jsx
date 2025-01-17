import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
const CustomerProtected = ({ compo }) => {
    const { customer } = useSelector(state => state.auth)
    return customer ? compo : <Navigate to="/login" />
}

export default CustomerProtected