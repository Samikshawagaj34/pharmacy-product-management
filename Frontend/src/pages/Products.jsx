import { Button, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import creamImg from "./../assets/Productsimg/creams1.jpg";
import dropsImg from "./../assets/Productsimg/drop1.webp";
import syrupsImg from "./../assets/Productsimg/syrup1.jpg";
import tabletImg from "./../assets/Productsimg/tablet1.webp";

export default function Products() {
  const navigate = useNavigate();

  const categories = [
    {
      name: "Tablets",
      description: "Wide range of tablets and capsules for various conditions.",
      image: tabletImg,
      path: "/products/tablets",
      points: [
        "Pain relief and antibiotics",
        "Vitamins and supplements",
        "Anti-allergy and digestive tablets",
      ],
    },
    {
      name: "Syrups",
      description: "Effective syrups for cough, cold, and other ailments.",
      image: syrupsImg,
      path: "/products/syrups",
      points: ["Cough & cold syrups", "Tonic & iron syrups", "Vitamin syrups"],
    },
    {
      name: "Creams & Ointments",
      description: "Skin creams, gels, and antiseptic ointments.",
      image: creamImg,
      path: "/products/creams",
      points: ["Skin care & rashes", "Antiseptic creams", "Moisturizing gels"],
    },
    {
      name: "Drops & Inhalers",
      description: "Eye drops, ear drops, and nasal inhalers.",
      image: dropsImg,
      path: "/products/drops",
      points: ["Eye drops", "Ear drops", "Nasal sprays & inhalers"],
    },
  ];

  return (
    <Container className="my-5">
      <h2 className="text-center mb-5 fw-bold text-success">
        Explore Our Products
      </h2>

      {categories.map((category, index) => (
        <Row
          key={index}
          className="align-items-center my-4 bg-light p-4 rounded shadow-sm mx-auto"
           style={{ maxWidth: "900px" }}
        >
          <Col md={4} className="text-center">
            
            <img
              src={category.image}
              alt={category.name}
              className="img-fluid rounded w-100"
              style={{ maxHeight: "200px", objectFit: "cover" }}
            />
          </Col>

          <Col md={8}>
            <h3 className="fw-bold">{category.name}</h3>
            <p className="text-muted">{category.description}</p>
            <ul className="mb-3">
              {category.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
            <Button
              variant="success"
              onClick={() => navigate(category.path)}
              className="mt-2"
            >
              View Products
            </Button>
          </Col>
        </Row>
      ))}
    </Container>
  );
}
