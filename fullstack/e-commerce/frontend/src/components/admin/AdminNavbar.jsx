import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useSelector } from 'react-redux';
import { useAdminLogoutMutation } from '../../redux/auth/authApi';
import { Button } from 'react-bootstrap';
import { useEffect } from 'react';
import { toast } from 'react-toastify';

function AdminNavbar() {
    const { admin } = useSelector(state => state.auth)
    const [adminSignOut, { isSuccess }] = useAdminLogoutMutation()
    useEffect(() => {
        if (isSuccess) {
            toast.success("admin logout success")
        }
    }, [isSuccess])
    return <div style={{ marginLeft: "200px" }}>
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                        <NavDropdown title={`welcome ${admin.name}`} id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <Button onClick={adminSignOut} className='dropdown-item'>
                                Logout
                            </Button>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>

}

export default AdminNavbar;