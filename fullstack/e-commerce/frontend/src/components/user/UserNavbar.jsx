import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useSelector } from 'react-redux';
import { useCustomerLogoutMutation } from '../../redux/auth/authApi';
import { Link } from 'react-router-dom';

function UserNavbar() {
    const { customer } = useSelector(state => state.auth)
    const [logoutCustomer, { isSuccess }] = useCustomerLogoutMutation()
    return (
        <Navbar expand="lg" className="bg-primary navbar-dark">
            <Container>
                <Navbar.Brand href="#home">User Panel</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link > <Link className='nav-link' to="/">Shop</Link></Nav.Link>
                        <Nav.Link > <Link className='nav-link' to="/user">Order Histroy</Link></Nav.Link>
                        <Nav.Link > <Link className='nav-link' to="/user/profile">Profile</Link></Nav.Link>
                        <NavDropdown title={`welcome ${customer.name}`} id="basic-nav-dropdown">
                            <NavDropdown.Item >
                                <div className='text-danger' onClick={logoutCustomer}>Logout</div>
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default UserNavbar;