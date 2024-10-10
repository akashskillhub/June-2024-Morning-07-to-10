import React from 'react'

const CustomerProtected = ({ compo }) => {
    const { customer } = useSelector(state => state.auth)
    return customer ? compo : <Navigate to="/login" />
}

export default CustomerProtected