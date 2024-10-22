import { Button, Snackbar } from '@mui/material'
import React, { useState } from 'react'

const M_Snackbar = () => {
    const [show, setShow] = useState(false)
    return <>
        <Button onClick={e => setShow(true)}>click me</Button>
        <Snackbar
            anchorOrigin={{ horizontal: "right", vertical: "top" }}
            open={show}
            onClose={e => setShow(false)}
            message="first snackbar"
            autoHideDuration={2000} />
    </>
}

export default M_Snackbar