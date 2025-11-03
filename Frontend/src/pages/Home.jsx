
import { Carousel, Container } from "react-bootstrap";

import BannerImg from "../assets/Homeimage/banner1 (2).png";
import BannerImg2 from "../assets/Homeimage/banner3.png";
import BannerImg3 from "../assets/Homeimage/banner4.png";
export default function Home(){
    return(
        <>
         <div className="bg-success text-white py-2">
        <Container>
          <marquee behavior="scroll" direction="left" scrollamount="6">
            🚚 Free Shipping on Prepaid Orders Over Rs 499! &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            🚚 Free Shipping on Prepaid Orders Over Rs 499! &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            🚚 Free Shipping on Prepaid Orders Over Rs 499!  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            🚚 Free Shipping on Prepaid Orders Over Rs 499!  
            
          </marquee>
        </Container>
      </div>

       <Carousel interval={2000}  controls={true}       
        indicators={true}     
        fade
              
        pause="hover"
          style={{ borderRadius: "15px", overflow: "hidden" }} >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={BannerImg}
          alt="First slide"
          style={{ height: "400px",
              objectFit: "contain",
              backgroundColor: "#e9ecef", }}
        />

      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={BannerImg2}
          alt="Second slide"
          style={{ height: "400px",
              objectFit: "contain",
              backgroundColor: "#e9ecef", }}
        />

      </Carousel.Item>

      <Carousel.Item>
        <img 
          className="d-block w-100"
          src={BannerImg3}
          alt="Third slide"
          style={{ height: "400px",
              objectFit: "contain",
              backgroundColor: "#e9ecef", }}
        />
      </Carousel.Item>
       </Carousel>
     


       <footer className="bg-success text-light text-center py-4 small">
                © {new Date().getFullYear()} Mini Project — Pharmacy Product Management System by 
                Vaishnavi Jagtap, Rugvedi Wankhade & Samiksha Wagaj.
            </footer>
        </>
    );
}