import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Training.css';

function Training() {
  return (
    <Container fluid className="training-wrapper d-flex align-items-center justify-content-center min-vh-100">
      <Row className="text-center training-row">
        <Col>
          <h1 className="training-title">Professional</h1>
          <h1 className="training-subtitle font-weight-bold">Dog Training</h1>
          <p className="training-intro lead">
            Establishing a strong, healthy bond with your dog starts with understanding their behavior and needs. 
            Professional dog training helps you build trust, instill obedience, and create a lifelong relationship with your furry companion.
          </p>
          <p className="training-details lead">
            Our training programs are tailored to meet the unique needs of each dog. Whether it's basic commands, 
            leash training, or addressing behavioral challenges, we ensure a positive and rewarding experience for both you and your pet.
          </p>
          <p className="training-summary lead">
            With professional guidance, you'll not only teach your dog essential skills but also foster a connection 
            that emphasizes mutual respect and communication. Let's make the journey to a well-behaved and happy dog enjoyable!
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Training;
