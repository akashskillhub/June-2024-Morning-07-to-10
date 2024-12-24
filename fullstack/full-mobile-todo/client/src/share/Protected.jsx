import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const Protected = ({ compo }) => {
    const { admin } = useSelector(state => state.auth)
    return admin ? compo : <Navigate to="/" />
}

export default Protected