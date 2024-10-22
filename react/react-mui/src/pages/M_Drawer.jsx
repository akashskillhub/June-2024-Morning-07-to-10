import { Button, Drawer } from '@mui/material'
import React, { useState } from 'react'

const M_Drawer = () => {
    const [show, setShow] = useState(false)
    return <>
        <Button onClick={e => setShow(true)}>Toggle</Button>
        <Drawer open={show} anchor='left' onClose={e => setShow(false)}>
            Lorem ipsum dolor
        </Drawer>
    </>
}

export default M_Drawer