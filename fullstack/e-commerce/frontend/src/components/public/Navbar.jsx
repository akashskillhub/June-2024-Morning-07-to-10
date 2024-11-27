import Button from 'react-bootstrap/Button';
import { Container, Row, Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaSearch, FaUser, FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';
function PublicNavbar() {
    return <>
        <div className='bg-light'>
            <div className='d-flex justify-content-between align-items-center container'>
                <div>
                    <Form.Select className='form-select-sm '>
                        <option>INR</option>
                        <option value="1">USD</option>
                        <option value="2">AUD</option>
                        <option value="3">CAD</option>
                    </Form.Select>
                </div>
                <div>Get free delivery on orders over $100 </div>
                <div className='d-flex'>
                    <Link to="/register" className='nav-link border-end mx-2 pe-2'>Create Account</Link>
                    <Link to="/login" className='nav-link'>Sign In</Link>
                </div>
            </div>
        </div>
        <Navbar expand="lg" className="bg-dark navbar-dark">
            <Container>
                <Navbar.Brand href="#">Flipkart - lite</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#action1">Men</Nav.Link>
                        <Nav.Link href="#action2">Woman</Nav.Link>
                        <Nav.Link href="#action2">Kids</Nav.Link>
                        <Nav.Link href="#action2">Winter</Nav.Link>

                    </Nav>
                    <div className="input-group me-2 w-25">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                        />
                        <Button variant="outline-light"><FaSearch /></Button>
                    </div>
                    <Button variant="outline-light me-2"><FaUser /></Button>
                    <Link to="/cart" className='btn btn-outline-light'><FaShoppingCart /></Link>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        <Container>
            <Row className='g-0'>
                <Col sm={4}>
                    <div className='d-flex flex-column justify-content-center align-item-center p-5 bg-light'>
                        <p className='m-0 text-center text-secondary '>Download the app</p>
                        <p className='m-0 text-center'>Lorem ipsum dolor sit amet.</p>
                    </div>
                </Col>
                <Col sm={4}>
                    <div className='d-flex flex-column justify-content-center align-item-center p-5 bg-light'>
                        <p className='m-0 text-center text-secondary '>Download the app</p>
                        <p className='m-0 text-center'>Lorem ipsum dolor sit amet.</p>
                    </div>
                </Col>
                <Col sm={4}>
                    <div className='d-flex flex-column justify-content-center align-item-center p-5 bg-light'>
                        <p className='m-0 text-center text-secondary '>Download the app</p>
                        <p className='m-0 text-center'>Lorem ipsum dolor sit amet.</p>
                    </div>
                </Col>
            </Row>
        </Container>
    </>
}

export default PublicNavbar;