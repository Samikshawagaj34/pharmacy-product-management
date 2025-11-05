    
import { Button, Card, Col, Container, Row } from "react-bootstrap";

import AyurvedaBanner from "../../assets/Ayurveda/AyurvedaBanner.jpg";

import AntacidImg from "../../assets/Ayurveda/Antacidsyrup.png";
import ArthoImg from "../../assets/Ayurveda/artho.png";
import VillaImg from "../../assets/Ayurveda/arthovilla.png";
import DaburImg from "../../assets/Ayurveda/Dabur.jpg";
import DaburbatiImg from "../../assets/Ayurveda/daburbati.jpg";
import CapsuleImg from "../../assets/Ayurveda/himalayacapsule.jpg";
import WeightImg from "../../assets/Ayurveda/himalayaweight.jpg";
import PRMImg from "../../assets/Ayurveda/PRM.png";






const HealthCare = [
  {
    img: AntacidImg,
    name: "Savlon Germ Protection Wipes",
    mrp: "₹70.50",
    price: "₹43.25",
    offer: "10% off",
    stock: true,
  },
  {
    img: ArthoImg,
    name: "Just Human 24 Hour Protection Hand Sanitizer",
    mrp: "₹70.90",
    price: "₹60.60",
    offer: "10% off",
    stock: true,
  },
  {
    img: VillaImg,
    name: "Savlon Mask",
    mrp: "₹99.90",
    price: "₹95.00",
    offer: "10% off",
    stock: true,
  },
  {
    img: DaburImg,
    name: "Sysfol 5mg Tablet",
    mrp: "₹39.60",
    price: "₹35.64",
    offer: "10% off",
    stock: true,
  },
   {
    img: DaburbatiImg,
    name: "Sysfol 5mg Tablet",
    mrp: "₹39.60",
    price: "₹35.64",
    offer: "10% off",
    stock: true,
  },
   {
    img: CapsuleImg,
    name: "Sysfol 5mg Tablet",
    mrp: "₹39.60",
    price: "₹35.64",
    offer: "10% off",
    stock: true,
  },
   {
    img: WeightImg,
    name: "Sysfol 5mg Tablet",
    mrp: "₹39.60",
    price: "₹35.64",
    offer: "10% off",
    stock: true,
  },
   {
    img: PRMImg,
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
          src={AyurvedaBanner}
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
