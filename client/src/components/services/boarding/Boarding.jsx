import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import axios from "axios"; // Import Axios
import { useNavigate } from "react-router-dom"; // Import useNavigate
import './Boarding.css';
import { assets } from "../../../assets/assets";

const Boarding = () => {
  const [pet, setPet] = useState("");
  const [service, setService] = useState("");
  const [days, setDays] = useState(1);
  const [total, setTotal] = useState(100); // Default total for 1 day
  const [loading, setLoading] = useState(false); // For loading state
  const [error, setError] = useState(""); // For error handling
  const [success, setSuccess] = useState(""); // For success message

  const navigate = useNavigate(); // Initialize useNavigate hook

  // Define costs for each service
  const serviceRates = {
    "Basic Boarding": 50,
    "Premium Boarding": 100,
    "VIP Boarding": 150,
  };

  // Update total based on service and days
  const handleServiceChange = (e) => {
    const selectedService = e.target.value;
    setService(selectedService);

    if (selectedService) {
      setTotal(serviceRates[selectedService] * days);
    }
  };

  const handleDaysChange = (e) => {
    const selectedDays = parseInt(e.target.value);
    setDays(selectedDays);

    if (service) {
      setTotal(serviceRates[service] * selectedDays);
    }
  };

  const handleBooking = async () => {
    setLoading(true); // Show loading while API call is in progress
    setError(""); // Clear previous errors
    setSuccess(""); // Clear success message

    const bookingData = {
      pet,
      service,
      days,
      total,
    };
    console.log("Booking data:", bookingData);

    try {
      // Make the POST request to the API
      const response = await axios.post("http://localhost:5000/boarding/createbooking", bookingData);
      console.log("API response:", response.data);

      if (response.status === 201) {
        setSuccess("Booking successful!"); // Success message
        setPet("");
        setService("");
        setDays(1);
        setTotal(100);
      }
    } catch (error) {
      console.error("Error response:", error.response.data);
      setError("Failed to book. Please try again."); // Error message
    } finally {
      setLoading(false); // Hide loading once API call completes
    }
  };

  // Navigate to home page
  const goHome = () => {
    navigate("/"); // Replace with your home route
  };

  return (
    <section className="boarding-section py-5">
      <Container fluid>
        <Row className="align-items-center">
          {/* Left corner: Image */}
          <Col md={6} className="text-center image-col">
            <img src={assets.adoptbanner3} alt="Pet Boarding" className="boarding-image" />
          </Col>

          {/* Right corner: Form */}
          <Col md={6} className="text-center form-col">
            <h2 className="heading mb-4">Get a Quote for Pet Boarding</h2>
            <p className="subheading mb-4">Select your pet, boarding service, and the duration to calculate the cost.</p>
            <Form>
              {/* Pet Selection */}
              <Form.Group className="mb-3">
                <Form.Label>Your Pet</Form.Label>
                <Form.Select value={pet} onChange={(e) => setPet(e.target.value)}>
                  <option value="">Select...</option>
                  <option value="Cat">Cat</option>
                  <option value="Dog">Dog</option>
                  <option value="Bird">Bird</option>
                </Form.Select>
              </Form.Group>

              {/* Service Selection */}
              <Form.Group className="mb-3">
                <Form.Label>Service</Form.Label>
                <Form.Select value={service} onChange={handleServiceChange}>
                  <option value="">Select...</option>
                  <option value="Basic Boarding">Basic Boarding</option>
                  <option value="Premium Boarding">Premium Boarding</option>
                  <option value="VIP Boarding">VIP Boarding</option>
                </Form.Select>
              </Form.Group>

              {/* Days Slider */}
              <Form.Group className="mb-3">
                <Form.Label>Number of Days</Form.Label>
                <Form.Range
                  min={1}
                  max={30}
                  value={days}
                  onChange={handleDaysChange}
                />
                <div>{days} day(s)</div>
              </Form.Group>

              {/* Total Cost */}
              <div className="total-cost mt-4">
                <h4>Total</h4>
                <h3>${total.toFixed(2)}</h3>
              </div>

              {/* Error or Success Message */}
              {error && <div className="alert alert-danger">{error}</div>}
              {success && <div className="alert alert-success">{success}</div>}

              {/* Submit Button */}
              <Button
                variant="primary"
                className="boarding-btn"
                onClick={handleBooking}
                disabled={loading}
              >
                {loading ? "Booking..." : "Book Now"}
              </Button>

              {/* Go Home Button */}
              <Button
                variant="secondary"
                className="mt-3"
                onClick={goHome}
              >
                Go Home
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Boarding;
