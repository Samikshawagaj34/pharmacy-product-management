    
import { Button, Card, Col, Container, Row } from "react-bootstrap";

import VitaminsBanner from "../../assets/Vitamins/VitaminsBanner1.jpg";

import AppleImg from "../../assets/Vitamins/Applecider.jpg";
import NutritioncImg from "../../assets/Vitamins/Nutritionvitaminc.jpg";
import PureImg from "../../assets/Vitamins/PureNutrition.jpg";
import PureDImg from "../../assets/Vitamins/PureNutritionDigestive.jpg";
import PureIronImg from "../../assets/Vitamins/PureNutritionIron.jpg";
import PapayaImg from "../../assets/Vitamins/PureNutritionPapaya.jpg";
import VitaminDImg from "../../assets/Vitamins/PureNutritionvitamind.jpg";
import ZincImg from "../../assets/Vitamins/PureNutritionZinc.jpg";







const HealthCare = [
  {
    img: AppleImg,
    name: "Savlon Germ Protection Wipes",
    mrp: "₹70.50",
    price: "₹43.25",
    offer: "10% off",
    stock: true,
  },
  {
    img: NutritioncImg,
    name: "Just Human 24 Hour Protection Hand Sanitizer",
    mrp: "₹70.90",
    price: "₹60.60",
    offer: "10% off",
    stock: true,
  },
  {
    img: PureImg,
    name: "Savlon Mask",
    mrp: "₹99.90",
    price: "₹95.00",
    offer: "10% off",
    stock: true,
  },
  {
    img: PureDImg,
    name: "Sysfol 5mg Tablet",
    mrp: "₹39.60",
    price: "₹35.64",
    offer: "10% off",
    stock: true,
  },
   {
    img: PureIronImg,
    name: "Sysfol 5mg Tablet",
    mrp: "₹39.60",
    price: "₹35.64",
    offer: "10% off",
    stock: true,
  },
   {
    img: PapayaImg,
    name: "Sysfol 5mg Tablet",
    mrp: "₹39.60",
    price: "₹35.64",
    offer: "10% off",
    stock: true,
  },
   {
    img: VitaminDImg,
    name: "Sysfol 5mg Tablet",
    mrp: "₹39.60",
    price: "₹35.64",
    offer: "10% off",
    stock: true,
  },
   {
    img: ZincImg,
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
          src={VitaminsBanner}
          alt="Medicines Banner"
          className="w-100 rounded-3 shadow"
          style={{ height: "250px", objectFit: "cover" }}
        />
       
         
       
      </div>

     
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h3 className="fw-bold">Vitamins, Proteins & Supplements</h3>
       
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
