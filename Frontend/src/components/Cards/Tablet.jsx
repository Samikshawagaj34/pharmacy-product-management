import { Button, Card, Col, Container, Row } from "react-bootstrap";
import tablet4 from "../../assets/Tabletcardimg/azithromycin.webp";
import tablet5 from "../../assets/Tabletcardimg/Cetirizine.jpg";
import tablet6 from "../../assets/Tabletcardimg/Crocin.jpg";
import tablet7 from "../../assets/Tabletcardimg/Disprin.jpg";
import tablet3 from "../../assets/Tabletcardimg/DOLO-60.jpg";
import tablet2 from "../../assets/Tabletcardimg/ibuprofen.jpg";
import tablet8 from "../../assets/Tabletcardimg/Metformin.jpg";
import tablet9 from "../../assets/Tabletcardimg/Pantoprazole.jpg";
import tablet1 from "../../assets/Tabletcardimg/paracetamol.jpg";

export default function Tablet() {
  const tablets = [
    { name: "Paracetamol", price: "₹25", image: tablet1 },
    { name: "Ibuprofen", price: "₹30", image: tablet2 },
    { name: "Dolo 650", price: "₹35", image: tablet3 },
    { name: "Azithromycin", price: "₹45", image: tablet4 },
    { name: "Cetirizine", price: "₹20", image: tablet5 },
    { name: "Crocin", price: "₹28", image: tablet6 },
    { name: "Disprin", price: "₹22", image: tablet7 },
    { name: "Metformin", price: "₹55", image: tablet8 },
    { name: "Pantoprazole", price: "₹60", image: tablet9 },
  ];

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">💊 Tablet Products</h2>
      <Row>
        {tablets.map((tab, index) => (
          <Col md={4} sm={6} xs={12} key={index} className="mb-4">
            <Card className="shadow-sm h-100 text-center">
              <Card.Img
                variant="top"
                src={tab.image}
                alt={tab.name}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <Card.Body>
                <Card.Title>{tab.name}</Card.Title>
                <Card.Text className="text-success fw-bold">
                  Price: {tab.price}
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
