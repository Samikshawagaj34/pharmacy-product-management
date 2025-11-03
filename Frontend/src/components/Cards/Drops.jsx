import { Button, Card, Col, Container, Row } from "react-bootstrap";
import drop4 from "../../assets/Dropimg/AsthmaInhaler.jpg";
import drop5 from "../../assets/Dropimg/BreathingInhaler.webp";
import drop9 from "../../assets/Dropimg/ColdInhaler.png";
import drop2 from "../../assets/Dropimg/EarDrop.webp";
import drop1 from "../../assets/Dropimg/EyeDrop.jpg";
import drop3 from "../../assets/Dropimg/NasalSpray.jpg";
import drop6 from "../../assets/Dropimg/NoseDrop.webp";
import drop7 from "../../assets/Dropimg/Anti-AllergyDrop.jpg";
import drop8 from "../../assets/Dropimg/contactLensDrop.webp";

export default function Drop() {
  const drops = [
    { name: "Eye Drop", price: "₹70", image: drop1 },
    { name: "Ear Drop", price: "₹60", image: drop2 },
    { name: "Nasal Spray", price: "₹90", image: drop3 },
    { name: "Asthma Inhaler", price: "₹250", image: drop4 },
    { name: "Breathing Inhaler", price: "₹300", image: drop5 },
    { name: "Nose Drop", price: "₹55", image: drop6 },
    { name: "Anti-Allergy Drop", price: "₹85", image: drop7 },
    { name: "Contact Lens Drop", price: "₹95", image: drop8 },
    { name: "Cold Inhaler", price: "₹100", image: drop9 },
  ];

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4"> Drops & Inhalers</h2>
      <Row>
        {drops.map((item, index) => (
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
