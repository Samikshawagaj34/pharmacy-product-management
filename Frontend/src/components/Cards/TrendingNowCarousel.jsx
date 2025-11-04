import React from "react";
import { Carousel, Card } from "react-bootstrap";

import CetaphilImg from "../../assets/TreandingNow/CetaphilMoisturisingLotion.jpg";

import RevitalImg from "../../assets/TreandingNow/RevitalH.jpg";
import CetaphilOilyImg from "../../assets/TreandingNow/Cetaphiloily.jpg";
import EmoloneImg from "../../assets/TreandingNow/Emoloe.jpg";
import GluconDImg from "../../assets/TreandingNow/Glucon-D.jpg";



const products = [
  {
    img: CetaphilImg,
    name: "Cetaphil Moisturising Lotion",
    price: "₹1699.00",
  },
  
  {
    img: RevitalImg,
    name: "Revital H - 60 Capsules",
    price: "₹630.00",
  },
  {
    img: CetaphilOilyImg,
    name: "Cetaphil Oily Skin Cleanser",
    price: "₹699.00",
  },
  {
    img: EmoloneImg,
    name: "Emolene Cream",
    price: "₹380.00",
  },
  {
    img: GluconDImg,
    name: "Glucon-D Tangy Orange",
    price: "₹415.00",
  },
 
  
];

const TrendingNowCarousel = () => {
  const chunkSize = 5; 
  const slides = [];
  for (let i = 0; i < products.length; i += chunkSize) {
    slides.push(products.slice(i, i + chunkSize));
  }

  return (
    <section className="py-4">
      <h4 className="mb-3 fw-bold text-center">TRENDING NOW</h4>
      <Carousel indicators={false}>
        {slides.map((group, index) => (
          <Carousel.Item key={index}>
            <div className="d-flex justify-content-center gap-3 flex-wrap">
              {group.map((item, i) => (
                <Card key={i} style={{ width: "15rem" }} className="shadow-sm">
                  <Card.Img
                    variant="top"
                    src={item.img}
                    style={{ height: "180px", objectFit: "contain", padding: "10px" }}
                  />
                  <Card.Body className="text-center">
                    <Card.Title style={{ fontSize: "14px" }}>{item.name}</Card.Title>
                    <Card.Text className="fw-semibold text-success">
                      {item.price}
                    </Card.Text>
                  </Card.Body>
                </Card>
              ))}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
};

export default TrendingNowCarousel;
