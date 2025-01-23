import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Card, Button, Table } from "react-bootstrap";
// import { pets_list } from "../../../assets/assetsnew";
import './AdminExploreCategory.css';
import axios from "axios";


function AdminExploreCategory() {
  const navigate = useNavigate();

  const [pets, setPets] = useState([])
 useEffect(()=>{
  const fetch = async()=>{

    try{
      const response = await axios.get('http://localhost:5000/admin/pets')
      setPets(response.data.pets)
      console.log(response);
      
    }
    catch(error){
      console.log(error);
      
    }
  }
  fetch()


 },[])

  // Navigate to add a new pet form
  const handleAddNewPet = () => {
    navigate('/adminaddpet');
  };

  // Edit a pet's details
  const handleEditPet = (id) => {
    navigate(`/admineditpet/${id}`);
  };

  // Delete a pet
  const handleDeletePet = (id) => {
    
    alert(`Pet with ID ${id} deleted!`);
  };
  

  return (
    <Container className="admin-explore-category py-5">
      <div className="admin-explore-category-header d-flex justify-content-between align-items-center mb-4">
        <h2>Admin - Manage Pets</h2>
        <Button className="admin-explore-category-btn-add-new-pet" onClick={handleAddNewPet}>
          Add New Pet
        </Button>
      </div>
      <Table striped bordered hover responsive className="admin-explore-category-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Image</th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {pets.map((pet, index) => (
            <tr key={pet._id} className="admin-explore-category-row">
              <td>{index + 1}</td>
              <td>
                <img
                  src={`http://localhost:5000/uploads/${pet.image}`}
                  alt={pet.name}
                  className="admin-explore-category-pet-image"
                />
              </td>
              <td>{pet.name}</td>
              <td>{pet.description}</td>
              <td>${pet.price}</td>
              <td>{pet.category}</td>
              <td>
                <Button
                  variant="primary"
                  size="sm"
                  className="admin-explore-category-btn-edit me-2"
                  onClick={() => handleEditPet(pet._id)}
                >
                  Edit
                </Button>
                <Button
                  variant="danger"
                  size="sm"
                  className="admin-explore-category-btn-delete"
                  onClick={() => handleDeletePet(pet._id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default AdminExploreCategory;
