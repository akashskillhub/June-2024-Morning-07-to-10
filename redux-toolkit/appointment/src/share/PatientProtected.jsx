import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const PatientProtected = ({ compo }) => {
    const { patient } = useSelector(state => state.auth)
    return patient ? compo : <Navigate to="/patient-login" />
}

export default PatientProtected