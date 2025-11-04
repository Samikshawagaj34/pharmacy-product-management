import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from '../../assets/Homeimage/logo.png';
import './Navbar.css';

export default function MyNavbar() {
  return (
    <>
      <Navbar bg="light" expand="lg" data-bs-theme="light" className="navbar">
        <Container>
          <Navbar.Brand href="/">
            <img
              src={Logo}
              alt="Wellness Forever"
              width="130"
              height="50"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/AboutUs">About Us</Nav.Link>
              <Nav.Link as={Link} to="/Products">Products</Nav.Link>
<Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
              <Nav.Link as={Link} to="/SignUp">Login</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
