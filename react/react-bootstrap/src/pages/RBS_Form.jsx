import React from 'react'
import { Container, FloatingLabel, Form } from 'react-bootstrap'

const RBS_Form = () => {
    return <>
        <Container>
            <Form.Control type='number' placeholder='Enter age' />
            <hr />
            <Form.Control size='lg' placeholder='large' />
            <Form.Control placeholder='medium' />
            <Form.Control size='sm' placeholder='smnall' />
            <hr />
            <FloatingLabel label="enter your name">
                <Form.Control placeholder='enter name' />
            </FloatingLabel>
            <hr />

            <Form.Control placeholder='enter name' isInvalid />
            <Form.Control placeholder='enter name' isValid />
            <hr />
            <Form.Check type='radio' name='gender' id='male' label="male" />
            <Form.Check type='radio' name='gender' id='female' label="female" />
            <hr />
            <Form.Check type='checkbox' id='html' label="html" />
            <Form.Check type='checkbox' id='css' label="css" />
            <Form.Check type='checkbox' id='js' label="js" />
        </Container>
    </>
}

export default RBS_Form