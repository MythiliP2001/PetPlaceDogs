import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import Rating from "@mui/material/Rating";
import axios from "axios";
import "./ExploreCategory.css";

function ExploreCategory() {
  const { categoryName } = useParams();
  const navigate = useNavigate();
  const [pets, setPets] = useState([]); // State to store fetched pets
  const [error, setError] = useState(""); // State to store error messages
  const [loading, setLoading] = useState(true); // State to manage loading state

  useEffect(() => {
    const fetchPets = async () => {
      try {
        // Fetch pets based on the category from the URL param
        const response = await axios.get(`http://localhost:5000/admin/pets?category=${categoryName}`);
        console.log("Backend response:", response.data);

        const petsData = response.data.pets;
        if (Array.isArray(petsData) && petsData.length > 0) {
          console.log("All pets:", petsData);
          setPets(petsData); // Set all pets if filtering is unnecessary
        } else {
          setError("No pets found for this category.");
        }
      } catch (error) {
        console.error("Error fetching pets:", error);
        setError("Failed to load pets. Please try again later.");
      } finally {
        setLoading(false); // Set loading to false once the request is done
      }
    };

    fetchPets();
  }, [categoryName]); // Dependency on categoryName

  // Navigate to cart page
  const handleGoToCart = () => navigate("/cart");

  // Handle adding item to cart
  const handleAddToCart = async (pet) => {
    try {
      const userId = localStorage.getItem("userId");
      if (!userId) {
        alert("Please log in to add items to your cart.");
        return;
      }

      const response = await axios.post("http://localhost:5000/cart/add", {
        userId,
        productId: pet._id,
        quantity: 1,
        name: pet.name,
        price: pet.price,
        description: pet.description,
        image : pet.image

    
      });

      alert(`${pet.name} added to cart!`);
      console.log("Cart response:", response.data);
    } catch (error) {
      console.error("Error adding to cart:", error);
      alert("Failed to add item to cart. Please try again.");
    }
  };

  // Loading state and error display
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  return (
    <Container className="py-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Explore {categoryName.charAt(0).toUpperCase() + categoryName.slice(1)}</h2>
        <Button className="btn-gocart-category" onClick={handleGoToCart}>
          Go to Cart
        </Button>
      </div>
      <Row>
        {pets.length > 0 ? (
          pets.map((pet) => (
            <Col key={pet._id} xs={12} sm={6} md={4} lg={3} className="mb-4">
              <Card>
                <Card.Img
                  variant="top"
                  src={`http://localhost:5000/uploads/${pet.image}`} // Dynamically fetched image
                  alt={pet.name}
                />
                <Card.Body>
                  <Card.Title>{pet.name}</Card.Title>
                  <Card.Text>{pet.description}</Card.Text>
                  <Card.Text>
                    <strong>Price:</strong> ${pet.price}
                  </Card.Text>
                  <Rating name="read-only" value={4} readOnly />
                  <Button
                    className="btn-addcart-category"
                    onClick={() => handleAddToCart(pet)}
                  >
                    Add to Cart
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <div>No pets available in this category.</div>
        )}
      </Row>
    </Container>
  );
}

export default ExploreCategory;
