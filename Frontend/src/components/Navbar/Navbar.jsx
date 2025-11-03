import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from '../../assets/Homeimage/logo.png';


export default function MyNavbar() {
    return(
        <>
        <Navbar bg="light" expand="lg" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home" ><img src={Logo} alt="Wellness Forever" width="130"  height="50" className="d-inline-block align-top"/></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/AboutUs">AboutUs</Nav.Link>
            <Nav.Link as={Link} to="/Products" >Gallery</Nav.Link>
            <Nav.Link as={Link} to="/ContactUs" >ContactUs</Nav.Link>
            <Nav.Link as={Link} to="/SignUp" >Login</Nav.Link>

          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </>
    );
}