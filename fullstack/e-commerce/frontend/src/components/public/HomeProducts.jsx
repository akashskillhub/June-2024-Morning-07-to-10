import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { useGetPublicProductQuery } from '../../redux/public/publicApi'
import { Link } from "react-router-dom"
const HomeProducts = () => {
    const { data } = useGetPublicProductQuery()
    return <>
        <Container className='my-5'>
            <Row>
                {
                    data && data.result.map(item => <Col sm={4}>
                        <Link to={`/details/${item._id}`} className='text-decoration-none'>
                            <Card className='my-3'>
                                <Card.Img src={item.hero[0]} variant='top' />
                                <Card.Body>
                                    <Card.Title>{item.name}</Card.Title>
                                    <Card.Text>Starting From {item.price}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Link>
                    </Col>)
                }

            </Row>
        </Container>
    </>
}

export default HomeProducts