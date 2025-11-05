import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import Footer from "../components/Footer/Footer"; // ✅ Import Footer

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus("Please fill out all fields.");
      return;
    }

    console.log("Form submitted:", formData);

    setStatus("Thank you! Your message has been sent.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <>
      {/* ✅ Main Contact Page */}
      <Container className="py-5">
        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            <h2 className="text-center mb-4 text-success fw-bold">Contact Us</h2>

            {status && (
              <Alert variant={status.includes("Thank") ? "success" : "danger"}>
                {status}
              </Alert>
            )}

            <Form onSubmit={handleSubmit} className="p-4 shadow rounded bg-light">
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  name="message"
                  placeholder="Type your message here"
                  value={formData.message}
                  onChange={handleChange}
                />
              </Form.Group>

              <div className="text-center">
                <Button variant="success" type="submit" className="px-5">
                  Send
                </Button>
              </div>
            </Form>
          </Col>
        </Row>

        {/* Office Info + Map */}
        <Row className="mt-5">
          <Col className="text-center">
            <h5>📍 Our Office</h5>
            <p>
              123 Business Street, Mumbai, India <br />
              📞 +91 951839 4969 <br />
              ✉️ cdac@gmail.com
            </p>

            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6140086.060413863!2d68.176645!3d22.3511148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff8e7e4f91b%3A0xdeb8b08d3b!2sIndia!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: 0, borderRadius: "8px" }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </Col>
        </Row>
      </Container>

      {/* ✅ Full-width Footer */}
      <div className="m-0 p-0 w-100" style={{ marginTop: 0 }}>
        <Footer />
      </div>
    </>
  );
}
