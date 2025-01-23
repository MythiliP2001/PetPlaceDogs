import React from "react";
import { Button, Carousel } from "react-bootstrap";
import vetbanner1 from "../../images/vetbanner1.jpg";
import vetbanner2 from "../../images/vetbanner2.jpg";
import vetbanner3 from "../../images/vetbanner3.jpg";
import "./Veteniary.css"; // Custom CSS for styling

function Veteniary() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={vetbanner1} alt="First slide" />
        <Carousel.Caption className="veteniary-caption">
          <h1>Devoted to proper animal healthcare.</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do nibh
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <Button className="veteniary-button" variant="danger">
            Read more <span className="veteniary-paw-icon">:)</span>
          </Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={vetbanner2} alt="Second slide" />
        <Carousel.Caption className="veteniary-caption">
          <h1>Care for every pet.</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do nibh
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <Button className="veteniary-button" variant="danger">
            Read more <span className="veteniary-paw-icon">:)</span>
          </Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={vetbanner3} alt="Third slide" />
        <Carousel.Caption className="veteniary-caption">
          <h1>
            Refining the world <span>one pet at a time!</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do nibh
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <Button className="veteniary-button" variant="danger">
            Read more <span className="veteniary-paw-icon">:)</span>
          </Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Veteniary;
