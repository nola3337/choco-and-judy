import Carousel from "react-bootstrap/Carousel";
import Image1 from "../../styles/img/ichigo.webp";
import Image2 from "../../styles/img/cococake.webp";
import Image3 from "../../styles/img/hearts.webp";

import { useState } from "react";

function HomeCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img src={Image1} alt="Strawberry chocolate cake" />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={Image2} alt="75% dark chocolate cake" />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={Image3} alt="Heart chocolates" />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HomeCarousel;
