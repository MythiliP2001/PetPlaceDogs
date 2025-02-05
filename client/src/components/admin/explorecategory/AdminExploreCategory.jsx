import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Table, Button } from "react-bootstrap";
import axios from "axios";
import "./AdminExploreCategory.css";

function AdminExploreCategory() {
  const navigate = useNavigate();
  const [pets, setPets] = useState([]); // Ensures initial state is always an array
  const [adoptPets, setAdoptPets] = useState([]); // Ensures initial state is always an array

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const response = await axios.get("http://localhost:5000/admin/pets");
        setPets(response.data.pets || []); // Ensures it's always an array
        console.log("Pets:", response.data.pets);
      } catch (error) {
        console.error("Error fetching pets:", error);
        setPets([]); // Prevents undefined errors
      }
    };

    const fetchAdoptPets = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/admin/fetchadoptablepets"
        );
        setAdoptPets(response.data.adoptPets || []); // Ensures it's always an array
        console.log("Adoptable Pets:", response.data.adoptPets);
      } catch (error) {
        console.error("Error fetching adoptable pets:", error);
        setAdoptPets([]); // Prevents undefined errors
      }
    };

    fetchPets();
    fetchAdoptPets();
  }, []);

  const handleAddNewPet = () => navigate("/adminaddpet");
  const handleAddNewAdoptPet = () => navigate("/adminadoptpet");
  const handleEditPet = (petId) => navigate(`/admineditpet/${petId}`);

  const handleDeletePet = async (id) => {
    if (window.confirm("Are you sure you want to delete this pet?")) {
      try {
        await axios.delete(`http://localhost:5000/admin/pets/${id}`);
        setPets((prevPets) => prevPets.filter((pet) => pet._id !== id));
        alert("Pet deleted successfully!");
      } catch (error) {
        console.error("Error deleting pet:", error);
        alert("There was an error deleting the pet.");
      }
    }
  };

  const handleDeleteAdoptPet = async (id) => {
    if (window.confirm("Are you sure you want to delete this adoptable pet?")) {
      try {
        await axios.delete(`http://localhost:5000/admin/adoptpets/${id}`);
        setAdoptPets((prevAdoptPets) =>
          prevAdoptPets.filter((pet) => pet._id !== id)
        );
        alert("Adoptable pet deleted successfully!");
      } catch (error) {
        console.error("Error deleting adoptable pet:", error);
        alert("There was an error deleting the adoptable pet.");
      }
    }
  };

  return (
    <Container className="admin-explore-category py-5">
      <div className="admin-explore-category-header d-flex justify-content-between align-items-center mb-4">
        <h2>Admin - Manage Pets</h2>
        <div>
          <Button className="admin-explore-category-btn" onClick={handleAddNewPet}>
            Add New Pet
          </Button>
          <Button className="admin-explore-category-btn" onClick={handleAddNewAdoptPet}>
            Add New Adoptable Pet
          </Button>
        </div>
      </div>

      {/* Manage Pets Table */}
      <h3>Manage Pets</h3>
      <Table striped bordered hover responsive>
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
          {pets.length > 0 ? (
            pets.map((pet, index) => (
              <tr key={pet._id}>
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
                  <Button variant="primary" size="sm" onClick={() => handleEditPet(pet._id)}>
                    Edit
                  </Button>{" "}
                  <Button variant="danger" size="sm" onClick={() => handleDeletePet(pet._id)}>
                    Delete
                  </Button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" className="text-center">
                No pets found.
              </td>
            </tr>
          )}
        </tbody>
      </Table>

      {/* Manage Adoptable Pets Table */}
      <h3>Manage Adoptable Pets</h3>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Image</th>
            <th>Name</th>
            <th>Description</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {adoptPets.length > 0 ? (
            adoptPets.map((pet, index) => (
              <tr key={pet._id}>
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
                <td>{pet.category}</td>
                <td>
                  <Button variant="primary" size="sm" onClick={() => handleEditPet(pet._id)}>
                    Edit
                  </Button>{" "}
                  <Button variant="danger" size="sm" onClick={() => handleDeleteAdoptPet(pet._id)}>
                    Delete
                  </Button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="text-center">
                No adoptable pets found.
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </Container>
  );
}

export default AdminExploreCategory;
