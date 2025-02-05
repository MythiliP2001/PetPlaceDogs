import React, { useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import vetbanner1 from "../../images/vetbanner1.jpg";
import vetbanner2 from "../../images/vetbanner2.jpg";
import vetbanner3 from "../../images/vetbanner3.jpg";
import "./Veteniary.css"; // Custom CSS for styling

function Veteniary() {
  // Scroll to top when the component is mounted
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  }, []);

  return (
    <Container fluid className="veteniary-container">
      {/* Heading Section */}
      <Row className="text-center mb-5">
        <Col>
          <h2 className="veteniary-main-title">Our Veterinary Services</h2>
          <p className="veteniary-subtitle">Compassionate care for your furry companions</p>
        </Col>
      </Row>

      <Row className="veteniary-row">
        <Col md={4} sm={12} className="veteniary-item">
          <img className="veteniary-image" src={vetbanner1} alt="Devoted to Animal Healthcare" />
          <div className="veteniary-caption">
            <h1 className="veteniary-title">Devoted to Proper Animal Healthcare</h1>
            <p className="veteniary-text">
              Our mission is to provide the highest quality medical care to your beloved pets. 
              From preventive treatments to critical care, we ensure your furry friends lead happy and healthy lives.
            </p>
          </div>
        </Col>
        <Col md={4} sm={12} className="veteniary-item">
          <img className="veteniary-image" src={vetbanner2} alt="Care for Every Pet" />
          <div className="veteniary-caption">
            <h1 className="veteniary-title">Care for Every Pet</h1>
            <p className="veteniary-text">
              Whether it's routine check-ups, vaccinations, or advanced diagnostics, our dedicated team is here to care for pets of all shapes and sizes.
            </p>
          </div>
        </Col>
        <Col md={4} sm={12} className="veteniary-item">
          <img className="veteniary-image" src={vetbanner3} alt="Refining the World One Pet at a Time" />
          <div className="veteniary-caption">
            <h1 className="veteniary-title">
              Refining the World <span className="veteniary-highlight">One Pet at a Time!</span>
            </h1>
            <p className="veteniary-text">
              By combining compassion, expertise, and innovation, we strive to enhance the well-being of pets and create a better world for them.
            </p>
          </div>
        </Col>
      </Row>

      {/* Navigate Back to Home */}
      <Row className="text-center mt-5">
        <Col>
          <Link to="/">
            <Button variant="primary">Go to Home</Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}

export default Veteniary;
