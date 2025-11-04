
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-success text-white pt-5 pb-3 mt-5">
      <Container>
        <Row className="gy-4">
         
          <Col md={4}>
            <h5 className="fw-bold">Wellness Forever</h5>
            <p className="small">
              Your trusted online pharmacy delivering medicines, health and wellness
              products at your doorstep with care and quality.
            </p>
          </Col>

          
          <Col md={2}>
            <h6 className="fw-bold">Quick Links</h6>
            <ul className="list-unstyled small">
              <li><a href="/" className="text-white text-decoration-none">Home</a></li>
              <li><a href="/products" className="text-white text-decoration-none">Products</a></li>
              <li><a href="/about" className="text-white text-decoration-none">About Us</a></li>
              <li><a href="/contact" className="text-white text-decoration-none">Contact</a></li>
            </ul>
          </Col>

          
          <Col md={3}>
            <h6 className="fw-bold">Customer Support</h6>
            <ul className="list-unstyled small">
              <li><a href="/privacy" className="text-white text-decoration-none">Privacy Policy</a></li>
              <li><a href="/terms" className="text-white text-decoration-none">Terms & Conditions</a></li>
              <li><a href="/returns" className="text-white text-decoration-none">Return Policy</a></li>
              <li><a href="/faq" className="text-white text-decoration-none">FAQ</a></li>
            </ul>
          </Col>

          
          <Col md={3}>
            <h6 className="fw-bold">Contact Us</h6>
            <p className="small mb-1">📍 Mumbai, Maharashtra, India</p>
            <p className="small mb-1">📞 +91 9876543210</p>
            <p className="small">📧 support@wellnessforever.com</p>

            
            <div className="d-flex gap-3 mt-2">
              <a href="#" className="text-white fs-5"><FaFacebook /></a>
              <a href="#" className="text-white fs-5"><FaInstagram /></a>
              <a href="#" className="text-white fs-5"><FaTwitter /></a>
              <a href="#" className="text-white fs-5"><FaLinkedin /></a>
            </div>
          </Col>
        </Row>

        <hr className="border-light my-4" />
        <p className="text-center small mb-0">
          @ {new Date().getFullYear()} Wellness Forever. All rights reserved.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
