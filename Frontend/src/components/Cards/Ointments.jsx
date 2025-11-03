import { Button, Card, Col, Container, Row } from "react-bootstrap";
import cream1 from "../../assets/Ointmentsimg/SkinCream.avif";
import cream2 from "../../assets/Ointmentsimg/Antiseptic.webp";
import cream3 from "../../assets/Ointmentsimg/MoisturizingCream.jpg";
import cream4 from "../../assets/Ointmentsimg/Funga InfectionCream.jpg";
import cream5 from "../../assets/Ointmentsimg/painReliefGel.webp";
import cream6 from "../../assets/Ointmentsimg/BurnOintment.avif";
import cream7 from "../../assets/Ointmentsimg/AcneGel.webp";
import cream8 from "../../assets/Ointmentsimg/EczemaCream.jpg";
import cream9 from "../../assets/Ointmentsimg/SunburnCream.jpg";

export default function Ointment() {
  const creams = [
    { name: "Skin Cream", price: "₹90", image: cream1 },
    { name: "Antiseptic Cream", price: "₹75", image: cream2 },
    { name: "Moisturizing Cream", price: "₹110", image: cream3 },
    { name: "Fungal Infection Cream", price: "₹130", image: cream4 },
    { name: "Pain Relief Gel", price: "₹95", image: cream5 },
    { name: "Burn Ointment", price: "₹120", image: cream6 },
    { name: "Acne Gel", price: "₹150", image: cream7 },
    { name: "Eczema Cream", price: "₹140", image: cream8 },
    { name: "Sunburn Cream", price: "₹100", image: cream9 },
  ];

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">🧴 Creams & Ointments</h2>
      <Row>
        {creams.map((item, index) => (
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
