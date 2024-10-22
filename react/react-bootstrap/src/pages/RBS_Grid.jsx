import React from 'react'
import { Alert, Col, Container, Row, Stack } from 'react-bootstrap'

const RBS_Grid = () => {
    return <Container >
        <Row>
            <Col sm={4} md={12} lg={8}> <Alert>primary</Alert> </Col>
            <Col sm={4} md={6} lg={4}> <Alert variant='danger'>danger</Alert> </Col>
            <Col sm={4} md={6} lg={4}> <Alert variant='info'>info</Alert> </Col>
            <Col sm={12} md={12} lg={8}> <Alert variant='success'>success</Alert> </Col>
        </Row>

        <Stack direction='horizontal' gap={2} className='justify-content-between'>
            <div className='bg-primary'>box1</div>
            <div className='bg-danger'>box2</div>
            <div className='bg-success'>box3</div>
        </Stack>
    </Container>
}

export default RBS_Grid