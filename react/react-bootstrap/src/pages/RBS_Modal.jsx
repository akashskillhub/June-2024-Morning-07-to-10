import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'

const RBS_Modal = () => {
    const [show, setShow] = useState(false)
    return <>
        <Button onClick={e => setShow(!show)}>toggle</Button>

        <Modal show={show} onHide={e => setShow(false)} size='xl'>
            <Modal.Header closeButton>header</Modal.Header>
            <Modal.Body>body</Modal.Body>
            <Modal.Footer>footer</Modal.Footer>
        </Modal>

    </>
}

export default RBS_Modal