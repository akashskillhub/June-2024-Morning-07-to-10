import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Footer = () => {
    return <div className='bg-light py-5 mt-5'>
        <Container>
            <Row>
                <Col sm={6}>
                    <h5>Flipkart - Lite</h5>
                </Col>
                <Col sm={3}>
                    <h6>Quick Links</h6>
                    <ul>
                        <li>About</li>
                        <li>Privacy Policy</li>
                        <li>Terms and Conditions</li>
                        <li>Return Policy</li>
                    </ul>
                </Col>
                <Col sm={3}>
                    <address>
                        <span className='me-1'>Fake Street.</span>
                        <span>Fake road, fake city.</span>
                        <div>USA. 884421</div>
                        <div >+1 2255 4458 66</div>
                    </address>
                </Col>
            </Row>
        </Container>
    </div>
}


export default Footer