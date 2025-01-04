import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const AdminProtected = ({ compo }) => {
    const { admin } = useSelector(state => state.auth)
    return admin ? compo : <Navigate to="/login-admin" />
}

export default AdminProtected