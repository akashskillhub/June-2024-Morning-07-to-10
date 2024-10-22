import React, { useState } from 'react'
import { Button, Offcanvas } from 'react-bootstrap'

const RBS_Offcanvas = () => {
    const [show, setShow] = useState(false)
    return <>
        <Button onClick={e => setShow(!show)}>toggle</Button>

        <Offcanvas show={show} onHide={() => setShow(false)} placement='end' >
            <Offcanvas.Header closeButton>Header</Offcanvas.Header>
            <Offcanvas.Body>Body</Offcanvas.Body>
        </Offcanvas>
    </>
}

export default RBS_Offcanvas