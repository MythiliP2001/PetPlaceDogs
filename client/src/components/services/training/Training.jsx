import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './Training.css'; // Assuming you have a CSS file for custom styles

function Training() {
  return (
    <Container fluid className="d-flex align-items-center justify-content-center min-vh-100 ">
      <Row className="text-center">
        <Col>
          <h1 className="display-4">Professional</h1>
          <h1 className="display-4 font-weight-bold">Dog Training</h1>
          <p className="lead">
            Before you can choose an actual dog trainer, I believe you must first decide what kind of bond you want to establish with your dog.
          </p>
          <div className="d-flex justify-content-center">
            <Button  className="training-btn">BOOK TRAINING</Button>
            <Button  className="training-btn">MORE DETAILS</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Training;
