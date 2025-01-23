import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./Appointment.css";
import { assets } from "../../assets/assets";
import axios from "axios";

const Appointment = () => {
  const [formData, setFormData] = useState({
    pet: "",
    interestedIn: [],
    date: "",
    time: "",
    preference: "",
  });

  const handleFormSubmit = async (e) => {
    e.preventDefault();


    try {
      const response = await axios.post('http://localhost:5000/appoint/appointment', formData);
      console.log(response.data.message);
      alert('Appointment booked successfully!');
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to book appointment');
    }

    console.log("Submitted Data:", formData);
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prevData) => ({
        ...prevData,
        interestedIn: checked
          ? [...prevData.interestedIn, value]
          : prevData.interestedIn.filter((item) => item !== value),
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  return (
    <section className="appointment-section py-5">
      <Container>
        <Row className="align-items-center">
          {/* Left Image Section */}
          <Col md={6} className="mb-4 mb-md-0">
            <img
              src={assets.img4}
              alt="Happy Pet"
              className="img-fluid rounded"
            />
          </Col>

          {/* Right Form Section */}
          <Col md={6} className="text-center text-md-start">
            <div className="appointment-form p-4">
              <h2 className="mb-4">Get Appointments</h2>
              <Form onSubmit={handleFormSubmit}>
                {/* Pet Selection */}
                <Form.Group className="mb-3">
                  <Form.Label>Pet *</Form.Label>
                  <div className="d-flex justify-content-between">
                    <Form.Check
                      type="radio"
                      label="Dog"
                      name="pet"
                      id="dog"
                      value="Dog"
                      onChange={handleInputChange}
                    />
                    <Form.Check
                      type="radio"
                      label="Products"
                      name="pet"
                      id="products"
                      value="Products"
                      onChange={handleInputChange}
                    />
                  </div>
                </Form.Group>

                {/* Interested Options */}
                <Form.Group className="mb-3">
                  <Form.Label>Interested in</Form.Label>
                  <div className="d-flex flex-wrap justify-content-between">
                    <Form.Check
                      type="checkbox"
                      label="Basic Groom"
                      id="basic-groom"
                      value="Basic Groom"
                      onChange={handleInputChange}
                    />
                    <Form.Check
                      type="checkbox"
                      label="Silver Groom"
                      id="silver-groom"
                      value="Silver Groom"
                      onChange={handleInputChange}
                    />
                    <Form.Check
                      type="checkbox"
                      label="Gold Groom"
                      id="gold-groom"
                      value="Gold Groom"
                      onChange={handleInputChange}
                    />
                  </div>
                </Form.Group>

                {/* Date, Time, and Preferences */}
                <Form.Group className="mb-3">
                  <Row>
                    <Col xs={6}>
                      <Form.Label>Date *</Form.Label>
                      <Form.Control
                        type="date"
                        name="date"
                        onChange={handleInputChange}
                      />
                    </Col>
                    <Col xs={6}>
                      <Form.Label>Time</Form.Label>
                      <Form.Control
                        type="time"
                        name="time"
                        onChange={handleInputChange}
                      />
                    </Col>
                  </Row>
                </Form.Group>
                <Form.Group className="mb-3">
                <Form.Label>Email *</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>


                <Form.Group className="mb-4">
                  <Form.Label>Preference</Form.Label>
                  <Form.Select
                    name="preference"
                    onChange={handleInputChange}
                  >
                    <option>Select Preference</option>
                    <option value="Morning">Morning</option>
                    <option value="Afternoon">Afternoon</option>
                    <option value="Evening">Evening</option>
                  </Form.Select>
                </Form.Group>

                <Button variant="warning" className="w-100" type="submit">
                  Start Booking
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Appointment;
