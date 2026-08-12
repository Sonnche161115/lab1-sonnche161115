import Carousel from "react-bootstrap/Carousel";

import banner1 from "../Images/banner1.jpg";
import banner2 from "../Images/banner2.jpg";
import banner3 from "../Images/banner3.jpg";

const slides = [
  { image: banner1, alt: "Summer Sale Banner 1" },
  { image: banner2, alt: "Summer Sale Banner 2" },
  { image: banner3, alt: "Summer Sale Banner 3" },
];

function HeroBanner() {
  return (
    <Carousel className="hero-carousel" indicators={true} controls={true}>
      {slides.map((slide, index) => (
        <Carousel.Item key={index}>
          <img src={slide.image} alt={slide.alt} />

          <div className="hero-overlay">
            <h1>SUMMER SALE UP TO 50%</h1>
            <p>
              Mua ngay
            </p>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default HeroBanner;