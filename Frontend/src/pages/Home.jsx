
import { Carousel, Container, Accordion, Row, Col } from "react-bootstrap";

import BannerImg from "../assets/Homeimage/banner1 (2).png";
import BannerImg2 from "../assets/Homeimage/banner3.png";
import BannerImg3 from "../assets/Homeimage/banner4.png";

import medImg from "../assets/Category/medicine1.png";
import personalImg from "../assets/Category/personalcare1.png";
import vitaminImg from "../assets/Category/vitaminsprotein1.png";
import HealthCareImg from "../assets/Category/healthcaredevice1.png";
import AyurvedicImg from "../assets/Category/Ayurveda1.png";
import BabyCareImg from "../assets/Category/babycare1.png";
import CovidImg from "../assets/Category/covid1.jpg";


import CetaphilImg from "../assets/Category/CetaphilOffer1.png";
import PerfumeImg from "../assets/Category/Fragrance2.png";
import SkincareImg from "../assets/Category/SkinCare3.png";

import { Link } from "react-router-dom";

import TrendingNowCarousel from "../components/Cards/TrendingNowCarousel.jsx";
import Footer from "../components/Footer/Footer.jsx";


export default function Home(){
    return(
        <>
         <div className="bg-success text-white py-2">
        <Container>
          <marquee behavior="scroll" direction="left" scrollamount="6">
            🚚 Free Shipping on Prepaid Orders Over Rs 499! &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            🚚 Free Shipping on Prepaid Orders Over Rs 499! &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            🚚 Free Shipping on Prepaid Orders Over Rs 499!  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            🚚 Free Shipping on Prepaid Orders Over Rs 499!  
            
          </marquee>
        </Container>
      </div>

       <Carousel interval={2000}  controls={true}       
        indicators={true}     
        fade
              
        pause="hover"
          style={{ borderRadius: "15px", overflow: "hidden" }} >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={BannerImg}
          alt="First slide"
          style={{ height: "400px",
              objectFit: "contain",
              backgroundColor: "#e9ecef", }}
        />

      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={BannerImg2}
          alt="Second slide"
          style={{ height: "400px",
              objectFit: "contain",
              backgroundColor: "#e9ecef", }}
        />

      </Carousel.Item>

      <Carousel.Item>
        <img 
          className="d-block w-100"
          src={BannerImg3}
          alt="Third slide"
          style={{ height: "400px",
              objectFit: "contain",
              backgroundColor: "#e9ecef", }}
        />
      </Carousel.Item>
       </Carousel>
     

     

      <section className="py-5 bg-white">
      <Container >
        <h3 className="text-center mb-4  fw-bold">Shop by Category</h3>
        <Row className="justify-content-center text-center g-4">
           <div
      className="d-flex flex-row overflow-auto py-2"
      style={{ gap: "10px", scrollbarWidth: "none" }}
    >
          
          
          <Col xs={6} sm={4} md={3} lg={2}>
            <Link to="/medicines" className="text-decoration-none text-dark">
              <div className="rounded-circle shadow-sm mx-auto "
                   style={{ width: "120px", height: "120px", overflow: "hidden" }}>
                <img
                  src={medImg}
                  alt="Medicines"
                  className="img-fluid"
                  style={{ objectFit: "contain", width: "100%", height: "100%" }}
                />
              </div>
              <p className="mt-2 fw-semibold">Medicines</p>
            </Link>
          </Col>

          
          <Col xs={6} sm={4} md={3} lg={2}>
            <Link to="/personalcare" className="text-decoration-none text-dark">
              <div className="rounded-circle shadow-sm mx-auto "
                   style={{ width: "120px", height: "120px", overflow: "hidden" }}>
                <img
                  src={personalImg}
                  alt="Personal Care"
                  className="img-fluid"
                  style={{ objectFit: "contain", width: "100%", height: "100%" }}
                />
              </div>
              <p className="mt-2 fw-semibold">Personal Care</p>
            </Link>
          </Col>

          
          <Col xs={6} sm={4} md={3} lg={2}>
            <Link to="/vitamins" className="text-decoration-none text-dark">
              <div className="rounded-circle shadow-sm mx-auto "
                   style={{ width: "120px", height: "120px", overflow: "hidden" }}>
                <img
                  src={vitaminImg}
                  alt="Vitamins"
                  className="img-fluid"
                  style={{ objectFit: "contain", width: "100%", height: "100%" }}
                />
              </div>
              <p className="mt-2 fw-semibold">Vitamins & Supplements</p>
            </Link>
          </Col>

           <Col xs={6} sm={4} md={3} lg={2}>
            <Link to="/HealthCare" className="text-decoration-none text-dark">
              <div className="rounded-circle shadow-sm mx-auto "
                   style={{ width: "120px", height: "120px", overflow: "hidden" }}>
                <img
                  src={HealthCareImg}
                  alt="Health Care"
                  className="img-fluid"
                  style={{ objectFit: "contain", width: "100%", height: "100%" }}
                />
              </div>
              <p className="mt-2 fw-semibold">Health Care</p>
            </Link>
          </Col>

          

           <Col xs={6} sm={4} md={3} lg={2}>
            <Link to="/Ayurveda" className="text-decoration-none text-dark">
              <div className="rounded-circle shadow-sm mx-auto "
                   style={{ width: "120px", height: "120px", overflow: "hidden" }}>
                <img
                  src={AyurvedicImg}
                  alt="Ayurvedic"
                  className="img-fluid"
                  style={{ objectFit: "contain", width: "100%", height: "100%" }}
                />
              </div>
              <p className="mt-2 fw-semibold">Ayurvedic</p>
            </Link>
          </Col>

           

          

           <Col xs={6} sm={4} md={3} lg={2}>
            <Link to="/covid" className="text-decoration-none text-dark">
              <div className="rounded-circle shadow-sm mx-auto "
                   style={{ width: "120px", height: "120px", overflow: "hidden" }}>
                <img
                  src={CovidImg}
                  alt="Covid Essentials"
                  className="img-fluid"
                  style={{ objectFit: "contain", width: "100%", height: "100%" }}
                />
              </div>
              <p className="mt-2 fw-semibold">Covid Essentials</p>
            </Link>
          </Col>
         </div>
          
        </Row>
      </Container>
    </section>






<section className="py-4 bg-white">
  <h3 className="text-center mb-4  fw-bold">Offers</h3>
  <Container>
    <Row className="g-3 justify-content-center">
      <Col xs={12} md={4}>
        <div className="card border-0 shadow-sm overflow-hidden">
          <img
            src={CetaphilImg}
            alt="Cetaphil Offer"
            className="img-fluid"
            style={{ borderRadius: "10px", height: "160px", objectFit: "cover" }}
          />
        </div>
      </Col>

      <Col xs={12} md={4}>
        <div className="card border-0 shadow-sm overflow-hidden">
          <img
            src={PerfumeImg}
            alt="Perfume Sale"
            className="img-fluid"
            style={{ borderRadius: "10px", height: "160px", objectFit: "cover" }}
          />
        </div>
      </Col>

      <Col xs={12} md={4}>
        <div className="card border-0 shadow-sm overflow-hidden">
          <img
            src={SkincareImg}
            alt="Skincare Offer"
            className="img-fluid"
            style={{ borderRadius: "10px", height: "160px", objectFit: "cover" }}
          />
        </div>
      </Col>
    </Row>
  </Container>
</section>


<TrendingNowCarousel />





<section className="py-5 bg-white">
  <Container>
    <h3 className="text-center mb-4  fw-bold">What Our Customers Say</h3>
    <div className="row g-4 justify-content-center">

     
      <div className="col-12 col-sm-6 col-md-4 col-lg-3">
        <div className="card shadow-sm border-0 text-center p-3 h-100">
          <img
            src="https://randomuser.me/api/portraits/women/65.jpg"
            alt="User 1"
            className="rounded-circle mx-auto mb-3"
            style={{ width: "90px", height: "90px", objectFit: "cover" }}
          />
          <h6 className="fw-bold">Priya Sharma</h6>
          <p className="text-muted small">
            “Great pharmacy! My order arrived in just 2 days, and everything was perfectly packed.”
          </p>
        </div>
      </div>

     
      <div className="col-12 col-sm-6 col-md-4 col-lg-3">
        <div className="card shadow-sm border-0 text-center p-3 h-100">
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="User 2"
            className="rounded-circle mx-auto mb-3"
            style={{ width: "90px", height: "90px", objectFit: "cover" }}
          />
          <h6 className="fw-bold">Rahul Mehta</h6>
          <p className="text-muted small">
            “Excellent service and genuine products. I’ll definitely order again!”
          </p>
        </div>
      </div>

      
      <div className="col-12 col-sm-6 col-md-4 col-lg-3">
        <div className="card shadow-sm border-0 text-center p-3 h-100">
          <img
            src="https://randomuser.me/api/portraits/women/12.jpg"
            alt="User 3"
            className="rounded-circle mx-auto mb-3"
            style={{ width: "90px", height: "90px", objectFit: "cover" }}
          />
          <h6 className="fw-bold">Sneha Kulkarni</h6>
          <p className="text-muted small">
            “User-friendly website and fast delivery. Highly recommend this pharmacy!”
          </p>
        </div>
      </div>

     
      <div className="col-12 col-sm-6 col-md-4 col-lg-3">
        <div className="card shadow-sm border-0 text-center p-3 h-100">
          <img
            src="https://randomuser.me/api/portraits/men/75.jpg"
            alt="User 4"
            className="rounded-circle mx-auto mb-3"
            style={{ width: "90px", height: "90px", objectFit: "cover" }}
          />
          <h6 className="fw-bold">Amit Patil</h6>
          <p className="text-muted small">
            “Reliable pharmacy with reasonable prices and authentic medicines.”
          </p>
        </div>
      </div>

    </div>
  </Container>
</section>




<section className="py-5 bg-light">
  <Container>
    <h3 className="text-center mb-4 text-success fw-bold"> Frequently Asked Questions❓</h3>

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

<Footer/>

      {/* <footer className="bg-success text-light text-center py-4 small">
               © {new Date().getFullYear()} Mini Project — Pharmacy Product Management System by 
                Vaishnavi Jagtap, Rugvedi Wankhade & Samiksha Wagaj.
            </footer>*/}
        </>
    );
}