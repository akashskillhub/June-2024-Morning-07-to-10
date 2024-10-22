import React from 'react'
import { Alert } from 'react-bootstrap'

const RBS_Alert = () => {
    return <>
        <Alert>primary</Alert>
        <Alert variant='secondary'>secondary</Alert>
        <Alert variant='info'>info</Alert>
        <Alert variant='success'>success</Alert>
        <Alert variant='danger'>danger</Alert>
        <Alert variant='warning'>warning</Alert>
        <Alert variant='danger'>danger</Alert>
        <Alert variant='dark'>dark</Alert>
        <Alert variant='light'>light</Alert>
    </>
}

export default RBS_Alert