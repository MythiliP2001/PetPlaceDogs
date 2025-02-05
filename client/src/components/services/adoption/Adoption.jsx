import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './Adoption.css';
import { useCart } from '../../../components/context/CartContext'; 
import axios from 'axios';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { assets } from '../../../assets/assets';

const Adoption = () => {
  const [adoptablePets, setAdoptablePets] = useState([]);
  const { addToCart } = useCart(); // Access addToCart function
  
  // Fetch adoptable pets when the component loads
  useEffect(() => {
    const fetchAdoptablePets = async () => {
      try {
        const response = await axios.get("http://localhost:5000/admin/fetchadoptablepets");
        if (response.data.adoptablePets) {
          setAdoptablePets(response.data.adoptablePets);
        }
      } catch (error) {
        console.error("Error fetching adoptable pets:", error);
      }
    };

    fetchAdoptablePets();
  }, []);

  const handleAddToCart = (item) => {
    addToCart(item); // Add the item to the cart
    alert(`${item.name} added to cart!`); // Optional feedback for the user
  };

  return (
    <>
      <div className="hero-section">
        <div className="hero-image-container">
          <img src={assets.adoptpage2} alt="Hero" className="hero-image" />
          <Container className="text-center text-white overlay-text">
            <h1 className="hero-title">Dog List</h1>
            <Breadcrumb className="hero-breadcrumb">
              <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
              <Breadcrumb.Item active>Dog List</Breadcrumb.Item>
            </Breadcrumb>
          </Container>
        </div>
      </div>

      <Container className="py-5">
        <Row>
          {adoptablePets.map((adoptpet) => (
            <Col xs={12} sm={6} md={4} lg={3} key={adoptpet._id}>
              <Card className="mb-4">
                <Card.Img variant="top" src={`http://localhost:5000/uploads/${adoptpet.image}`} alt={adoptpet.name} />
                <Card.Body>
                  <Card.Title>{adoptpet.name}</Card.Title>
                  <Card.Text>{adoptpet.description}</Card.Text>
                  <Card.Text>
                    <strong>Adoption Fee:</strong> ${adoptpet.price}
                  </Card.Text>
                  <Button onClick={() => handleAddToCart(adoptpet)}>Adopt {adoptpet.name}</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Adoption;
