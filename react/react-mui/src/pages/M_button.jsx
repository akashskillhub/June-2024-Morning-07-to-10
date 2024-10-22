import { Button, ButtonGroup } from '@mui/material'
import React from 'react'

const M_button = () => {
    return <>
        <Button>Text</Button>
        <Button variant='contained'>contained</Button>
        <Button variant='outlined'>outlined</Button>
        <hr />
        <Button variant='contained' color='primary'>primary</Button>
        <Button variant='contained' color='secondary'>secondary</Button>
        <Button variant='contained' color='info'>info</Button>
        <Button variant='contained' color='success'>success</Button>
        <Button variant='contained' color='warning'>warning</Button>
        <Button variant='contained' color='error'>error</Button>
        <hr />
        <Button variant='contained' color='primary' size='large'>large</Button>
        <Button variant='contained' color='primary' size='medium'>medium</Button>
        <Button variant='contained' color='primary' size='small'>small</Button>
        <hr />
        <ButtonGroup>
            <Button variant='contained' color='error'>error</Button>
            <Button variant='contained' color='primary'>primary</Button>
            <Button variant='contained' color='success'>success</Button>
        </ButtonGroup>
    </>
}

export default M_button