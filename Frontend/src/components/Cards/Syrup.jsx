import { Button, Card, Col, Container, Row } from "react-bootstrap";
import syrup1 from "../../assets/Syrupcardimg/CoughSyrup.jpg";
import syrup2 from "../../assets/Syrupcardimg/VitaminSyrup.webp";
import syrup3 from "../../assets/Syrupcardimg/IronTonic.jpg";
import syrup4 from "../../assets/Syrupcardimg/FeverReliefSyrup.avif";
import syrup5 from "../../assets/Syrupcardimg/coldSyrup.webp";
import syrup6 from "../../assets/Syrupcardimg/DigestiveSyrup.webp";
import syrup7 from "../../assets/Syrupcardimg/LiverTonic.jpg";
import syrup8 from "../../assets/Syrupcardimg/CalciumSyrup.webp";
import syrup9 from "../../assets/Syrupcardimg/PainReliefSyrup.jpg";

export default function Syrup() {
  const syrups = [
    { name: "Cough Syrup", price: "₹80", image: syrup1 },
    { name: "Vitamin Syrup", price: "₹95", image: syrup2 },
    { name: "Iron Tonic", price: "₹120", image: syrup3 },
    { name: "Fever Relief Syrup", price: "₹75", image: syrup4 },
    { name: "Cold Syrup", price: "₹90", image: syrup5 },
    { name: "Digestive Syrup", price: "₹85", image: syrup6 },
    { name: "Liver Tonic", price: "₹110", image: syrup7 },
    { name: "Calcium Syrup", price: "₹130", image: syrup8 },
    { name: "Pain Relief Syrup", price: "₹100", image: syrup9 },
  ];

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Syrup Products</h2>
      <Row>
        {syrups.map((item, index) => (
          <Col md={4} sm={6} xs={12} key={index} className="mb-4">
            <Card className="shadow-sm h-100 text-center">
              <Card.Img
                variant="top"
                src={item.image}
                alt={item.name}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text className="text-success fw-bold">
                  Price: {item.price}
                </Card.Text>
                <Button variant="success">Add to Cart</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
