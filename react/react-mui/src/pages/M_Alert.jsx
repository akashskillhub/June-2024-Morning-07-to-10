import { Alert } from '@mui/material'
import React from 'react'

const M_Alert = () => {
    return <>
        <Alert severity='error'>error</Alert>
        <Alert severity='info'>info</Alert>
        <Alert severity='success'>success</Alert>
        <Alert severity='warning'>warning</Alert>
        <hr />
        <Alert variant='filled'>filled</Alert>
        <Alert variant='outlined'>outlined</Alert>
        <Alert variant='standard'>standard</Alert>

    </>
}

export default M_Alert