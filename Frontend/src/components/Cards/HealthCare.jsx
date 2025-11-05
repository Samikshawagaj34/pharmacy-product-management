    
import { Button, Card, Col, Container, Row } from "react-bootstrap";

import HealthCareBanner from "../../assets/HealthCareDevices/healthCareBanner1.jpg";

import DettolImg from "../../assets/Covid/dettol.jpg";
import himalayaImg from "../../assets/Covid/himalaya.jpg";
import lifeboyImg from "../../assets/Covid/lifeboy.jpg";
import MaskImg from "../../assets/Covid/mask.jpg";
import PulseImg from "../../assets/Covid/pulse.jpeg";
import SanitizerImg from "../../assets/Covid/sanitizer.jpg";
import savlonImg from "../../assets/Covid/savlon.jpg";
import VicksImg from "../../assets/Covid/vicks.jpg";






const HealthCare = [
  {
    img: savlonImg,
    name: "Savlon Germ Protection Wipes",
    mrp: "₹70.50",
    price: "₹43.25",
    offer: "10% off",
    stock: true,
  },
  {
    img: SanitizerImg,
    name: "Just Human 24 Hour Protection Hand Sanitizer",
    mrp: "₹70.90",
    price: "₹60.60",
    offer: "10% off",
    stock: true,
  },
  {
    img: MaskImg,
    name: "Savlon Mask",
    mrp: "₹99.90",
    price: "₹95.00",
    offer: "10% off",
    stock: true,
  },
  {
    img: PulseImg,
    name: "Sysfol 5mg Tablet",
    mrp: "₹39.60",
    price: "₹35.64",
    offer: "10% off",
    stock: true,
  },
   {
    img: VicksImg,
    name: "Sysfol 5mg Tablet",
    mrp: "₹39.60",
    price: "₹35.64",
    offer: "10% off",
    stock: true,
  },
   {
    img: lifeboyImg,
    name: "Sysfol 5mg Tablet",
    mrp: "₹39.60",
    price: "₹35.64",
    offer: "10% off",
    stock: true,
  },
   {
    img: himalayaImg,
    name: "Sysfol 5mg Tablet",
    mrp: "₹39.60",
    price: "₹35.64",
    offer: "10% off",
    stock: true,
  },
   {
    img: DettolImg,
    name: "Sysfol 5mg Tablet",
    mrp: "₹39.60",
    price: "₹35.64",
    offer: "10% off",
    stock: true,
  },
];

const HealthCarePage = () => {
  return (
    <Container className="py-4">
      
      <div className="position-relative mb-4">
        <img
          src={HealthCareBanner}
          alt="Medicines Banner"
          className="w-100 rounded-3 shadow"
          style={{ height: "250px", objectFit: "cover" }}
        />
       
         
       
      </div>

     
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h3 className="fw-bold">Healthcare Devices</h3>
        <div>
          <label className="me-2 fw-semibold">Sort By</label>
          <select className="form-select d-inline w-auto">
            <option>Relevance</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
        </div>
      </div>

     
      <Row className="gy-4">
        {HealthCare.map((item, index) => (
          <Col key={index} xs={12} sm={6} md={4} lg={3}>
            <Card className="shadow-sm h-100">
              <Card.Img
                variant="top"
                src={item.img}
                style={{
                  height: "180px",
                  objectFit: "contain",
                  padding: "10px",
                }}
              />
              <Card.Body className="text-center">
                <Card.Title style={{ fontSize: "15px", minHeight: "45px" }}>
                  {item.name}
                </Card.Title>
                <p className="mb-1 text-muted">
                  MRP <del>{item.mrp}</del>{" "}
                  <span className="text-success fw-semibold">{item.offer}</span>
                </p>
                <p className="fw-bold">{item.price}</p>
                <Button
                  variant={item.stock ? "success" : "secondary"}
                  disabled={!item.stock}
                  className="w-100"
                >
                  {item.stock ? "Add to Cart" : "Out of Stock"}
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default HealthCarePage;
