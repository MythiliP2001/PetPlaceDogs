import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Await } from "react-router-dom";
import { Container, Form, Button } from "react-bootstrap";
import { pets_list } from "../../../assets/assetsnew";
import axios from "axios";
import './AdminEditPet.css';

const AdminEditPet = () => {
  const { id } = useParams(); // Get the pet ID from the URL
  const navigate = useNavigate();

  // Initialize state for pet details
  const [petData, setPetData] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    image: "",
  });

  // Fetch the pet data based on the ID when the component loads
  // useEffect(() => {
  //   const pet = pets_list.find((pet) => pet._id === id);
  //   if (pet) {
  //     setPetData(pet);
  //   } else {
  //     alert("Pet not found!");
  //     navigate("/adminexplorecategory")
  //   }
  // }, [id, navigate]);


  useEffect(() => {
    const fetchPet = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/editpet/${id}`); // Fetch pet details
        setPetData(response.data);
      } catch (error) {
        console.error("Error fetching pet data:", error);
        alert("Pet not found!");
        navigate("/adminexplorecategory"); // Redirect if pet is not found
      }
    };

    fetchPet();
  }, [id, navigate]);


  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPetData({ ...petData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async(e) => {
    e.preventDefault();

    // Perform backend API call here to update the pet (if needed)
    try{
      await axios.put(`http://localhost:5000/editpet/${id}`, petData);
    
    alert('Pet details updated successfully');
    navigate("/adminexplorecategory"); // Redirect back to the pet list
    }catch(error){
      console.error("Error updating pet:", error);
      alert("Failed to update pet details. Please try again.");
    }
  };

  return (
    <Container className="admin-edit-pet py-5">
      <h2>Edit Pet</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Pet Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={petData.name}
            onChange={handleChange}
            placeholder="Enter pet name"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            name="description"
            value={petData.description}
            onChange={handleChange}
            placeholder="Enter pet description"
            rows={3}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="number"
            name="price"
            value={petData.price}
            onChange={handleChange}
            placeholder="Enter pet price"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Category</Form.Label>
          <Form.Control
            type="text"
            name="category"
            value={petData.category}
            onChange={handleChange}
            placeholder="Enter pet category"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Image URL</Form.Label>
          <Form.Control
            type="text"
            name="image"
            value={petData.image}
            onChange={handleChange}
            placeholder="Enter image URL"
            required
          />
        </Form.Group>
        <Button type="submit"  className="admineditpet-btn">
          Save Changes
        </Button>
      </Form>
    </Container>
  );
};

export default AdminEditPet;
