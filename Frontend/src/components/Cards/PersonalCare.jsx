import React from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";


import PersonalCareBanner from "../../assets/PersonalCare/PersonalCareBanner1.jpg";

import SchwarzkopfImg from "../../assets/PersonalCare/Gliss.jpg";
import BiodermaImg from "../../assets/PersonalCare/Bioderma.jpeg";
import SebamedImg from "../../assets/PersonalCare/Sebamed.jpg";
import HimalayaImg from "../../assets/PersonalCare/Himalaya.jpg";
import CutiytImg from "../../assets/PersonalCare/Cutiyt.jpeg";
import SolasafeImg from "../../assets/PersonalCare/Solasafe.jpg";
import EthigloImg from "../../assets/PersonalCare/Ethiglo.jpg";
import GlycoImg from "../../assets/PersonalCare/Glyco.jpg";


import AddToCart from "../AddToCart.jsx";

const personalCareProducts = [
  {
    img: SchwarzkopfImg,
    name: "Schwarzkopf Gliss Hair Repair color ",
    mrp: "₹900.00",
    price: "₹775.00",
    offer: "10% off",
    stock: true,
  },
  {
    img: BiodermaImg,
    name: "Bioderma Sensibio H2O",
    mrp: "₹1010.00",
    price: "₹990.00",
    offer: "10% off",
    stock: true,
  },
  {
    img: SebamedImg,
    name: "Sebamed Olive Face ",
    mrp: "₹850.00",
    price: "₹800.00",
    offer: "10% off",
    stock: true,
  },
  {
    img: HimalayaImg,
    name: "Himalaya Tan Removal Orange",
    mrp: "₹180.00",
    price: "₹165.00",
    offer: "10% off",
    stock: true,
  },
  {
    img: CutiytImg,
    name: "Cutiyt G 12 Lotion 50 ml",
    mrp: "₹815.00",
    price: "₹715.00",
    offer: "10% off",
    stock: true,
  },
  {
    img: SolasafeImg,
    name: "Solasafe Spf 50+ Sunscreen Gel 50 gm",
    mrp: "₹869.00",
    price: "₹769.00",
    offer: "10% off",
    stock: true,
  },
  {
    img: EthigloImg,
    name: "Ethiglo Face Wash 70 gm",
    mrp: "₹260.00",
    price: " 239.20",
    offer: "10% off",
    stock: true,
  },
  {
    img: GlycoImg,
    name: "Glyco-12 Cream 30 gm",
    mrp: "₹480.00",
    price: "₹352.00",
    offer: "10% off",
    stock: true,
  },
];

const PersonalCarePage = () => {
  return (
    <Container className="py-4">
     
      <div className="position-relative mb-4">
        <img
          src={PersonalCareBanner}
          alt="Personal Care Banner"
          className="w-100 rounded-3 shadow"
          style={{ height: "250px", objectFit: "cover" }}
        />
        
      </div>

      
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h3 className="fw-bold">Personal Care Products</h3>
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
        {personalCareProducts.map((item, index) => (
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
                 <AddToCart/>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default PersonalCarePage;
