import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'

const HomeProducts = () => {
    const data = [
        {
            hero: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            price: "1299",
            name: "test"
        },
        {
            hero: "https://images.unsplash.com/photo-1523381294911-8d3cead13475?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            price: "350",
            name: "demo"
        },
        {
            hero: "https://images.unsplash.com/photo-1470309864661-68328b2cd0a5?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            price: "699",
            name: "demo"
        },
        {
            hero: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            price: "6999",
            name: "suite"
        },
        {
            hero: "https://images.unsplash.com/photo-1564584217132-2271feaeb3c5?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            price: "999",
            name: "t shirt"
        },
        {
            hero: "https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            price: "789",
            name: "fancy"
        },
    ]
    return <>
        <Container className='my-5'>
            <Row>
                {
                    data.map(item => <Col sm={4}>
                        <Card className='my-3'>
                            <Card.Img src={item.hero} variant='top' />
                            <Card.Body>
                                <Card.Title>{item.name}</Card.Title>
                                <Card.Text>Starting From {item.price}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>)
                }

            </Row>
        </Container>
    </>
}

export default HomeProducts