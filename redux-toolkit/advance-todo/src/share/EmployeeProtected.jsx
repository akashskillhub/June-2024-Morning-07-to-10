import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const EmployeeProtected = ({ compo }) => {
    const { loggedInUser } = useSelector(state => state.auth)
    return loggedInUser ? compo : <Navigate to="/login" />
}

export default EmployeeProtected