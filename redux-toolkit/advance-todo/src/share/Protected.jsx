import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const Protected = ({ compo }) => {
    const { loggedInAdmin } = useSelector(state => state.auth)
    return loggedInAdmin ? compo : <Navigate to="/admin-login" />
}

export default Protected 
