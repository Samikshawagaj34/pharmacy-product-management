import './AboutUs.css';
import React from 'react';
import vintageImg from '../assets/AboutUs/team.jpg';
import rugImg from '../assets/AboutUs/rug.jpeg';
import vaishImg from '../assets/AboutUs/vaish.jpg';
import samImg from '../assets/AboutUs/sam.jpg';
import { useNavigate } from "react-router-dom";
import { Container, Accordion } from 'react-bootstrap';
import Footer from '../components/Footer/Footer'; // ✅ Footer import

const teamData = [
  {
    id: 1,
    name: 'Vaishnavi Jagtap',
    role: 'Software Developer',
    bio: 'Builds Backend and Frontend.',
    img: vaishImg,
    linkedin: 'https://www.linkedin.com/in/vaishnavi-jagtap-267a67286',
  },
  {
    id: 2,
    name: 'Rugvedi Wankhade',
    role: 'Software Developer',
    bio: 'Builds Frontend and Backend.',
    img: rugImg,
    linkedin: 'https://www.linkedin.com/in/rugvedi-wankhede/',
  },
  {
    id: 3,
    name: 'Samiksha Wagaj',
    role: 'Software Developer',
    bio: 'Builds Frontend and Backend.',
    img: samImg,
    linkedin: 'https://www.linkedin.com/in/samiksha-wagaj-343533302?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
  },
];

export default function AboutUs() {
  const navigate = useNavigate();

  return (
    <>
      {/* ✅ Main About Us container */}
      <div className="about-us container py-5">

        {/* HERO */}
        <header className="row align-items-center mb-5">
          <div className="container my-5">
            <div className="row align-items-center">

              {/* Left Column – Text */}
              <div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
                <h2 className="fw-bold mb-4 mt-n3 display-5 text-dark">About Us</h2>
                <p className="text-muted">
                  At <strong>Wellness Forever Pharmacy Management</strong>, we’re redefining how pharmacies handle
                  their products, inventory, and operations. Our platform provides a seamless solution that helps
                  pharmacists, retailers, and healthcare providers manage medicines, track stock levels, and ensure
                  timely delivery — all from one intelligent dashboard.
                </p>
                <div className="mt-3">
                  <button
                    className="btn btn-success me-2"
                    onClick={() => navigate("/contact")}
                  >
                    Contact us
                  </button>
                  <a href="#team" className="btn btn-outline-secondary text-dark">Meet the team</a>
                </div>
              </div>

              {/* Right Column – Image */}
              <div className="col-lg-6 col-md-12 text-center">
                <img
                  src={vintageImg}
                  alt="About our pharmacy management platform"
                  className="img-fluid rounded-3 shadow-sm"
                  style={{ height: '350px', width: '100%', objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </header>

        {/* MISSION / VISION / VALUES */}
        <section className="row text-center mb-5">
          <div className="col-md-4 mb-3">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title text-dark">Our Mission</h5>
                <p className="card-text text-muted">
                  To empower pharmacies and healthcare providers with smart, digital tools that simplify medicine management,
                  reduce errors, and enhance patient satisfaction.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-3">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title text-dark">Our Vision</h5>
                <p className="card-text text-muted">
                  To build a connected healthcare ecosystem where every pharmacy — big or small — can operate efficiently,
                  serve responsibly, and grow sustainably using data-driven insights.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-3">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title text-dark">Our Values</h5>
                <p className="card-text text-muted">
                  <strong>Integrity</strong> in every transaction,
                  <strong> Accuracy</strong> in every record,
                  <strong> Innovation</strong> in every feature, and
                  <strong> Care</strong> for every customer we serve.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* TEAM */}
        <section id="team" className="mb-5">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <div>
              <h2 className="h4 mb-0 text-dark">Meet the team</h2>
              <p className="text-muted mb-0">
                A small, cross-functional group of makers, engineers and designers.
              </p>
            </div>
            <div>
              <button
                className="btn btn-sm btn-outline-success"
                onClick={() => navigate("/login")}
              >
                Join us
              </button>
            </div>
          </div>

          <div className="row g-3">
            {teamData.map(member => (
              <div key={member.id} className="col-12 col-sm-6 col-md-4">
                <div className="card h-100 shadow-sm">
                  <div className="row g-0 align-items-center">
                    <div className="col-auto p-3">
                      <img
                        src={member.img}
                        alt={member.name}
                        className="rounded-circle"
                        style={{ width: '72px', height: '72px', objectFit: 'cover' }}
                      />
                    </div>
                    <div className="col">
                      <div className="card-body py-3">
                        <h5 className="card-title mb-1">{member.name}</h5>
                        <p className="text-muted small mb-2">{member.role}</p>
                        <p className="small text-muted mb-2">{member.bio}</p>
                        <div>
                          <a
                            href={member.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-sm btn-outline-secondary"
                          >
                            LinkedIn
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-5 bg-light">
          <Container>
            <h3 className="text-center mb-4 text-success fw-bold">
              Frequently Asked Questions❓
            </h3>

            <Accordion defaultActiveKey="0" className="mx-auto" style={{ maxWidth: "800px" }}>
              <Accordion.Item eventKey="0">
                <Accordion.Header>How long does delivery take?</Accordion.Header>
                <Accordion.Body>
                  We usually deliver within <strong>2–5 business days</strong>, depending on your location and product availability.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="1">
                <Accordion.Header>Are all medicines genuine?</Accordion.Header>
                <Accordion.Body>
                  Yes ✅, we only sell <strong>100% authentic and government-approved medicines</strong> from trusted suppliers.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="2">
                <Accordion.Header>Do you offer free shipping?</Accordion.Header>
                <Accordion.Body>
                  Yes! 🚚 Free shipping is available on <strong>prepaid orders over ₹499</strong>.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="3">
                <Accordion.Header>Can I return or exchange a product?</Accordion.Header>
                <Accordion.Body>
                  Products can be returned or replaced if they are <strong>damaged, expired, or incorrect</strong> within 7 days of delivery.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="4">
                <Accordion.Header>How can I contact customer support?</Accordion.Header>
                <Accordion.Body>
                  You can reach our support team 24x7 via <strong>email</strong> or <strong>WhatsApp chat</strong> from the Contact Us page.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Container>
        </section>
      </div>

      {/* ✅ Full-width footer (no side margins) */}
      <div className="m-0 p-0 w-100" style={{ marginTop: 0 }}>
        <Footer />
      </div>
    </>
  );
}
