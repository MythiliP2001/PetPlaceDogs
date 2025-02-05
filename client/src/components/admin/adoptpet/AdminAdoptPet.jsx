import React, { useState } from "react";
import axios from "axios";
import './AdminAdoptPet.css';
import { useNavigate } from "react-router-dom";

function AdminAdoptPet() {
  const navigate = useNavigate();
  const [petData, setPetData] = useState({
    name: "",
    description: "",
    category: "",
    image: null,
  });

  const [message, setMessage] = useState({ text: "", type: "" }); // message type: "success" or "error"

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPetData({
      ...petData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setPetData({
      ...petData,
      image: e.target.files[0],
    });
  };

  console.log(petData, 'adopt pet data');
  
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const formData = new FormData();
    formData.append("name", petData.name);
    formData.append("description", petData.description);
    formData.append("category", petData.category);
    formData.append("image", petData.image);
  
    // ✅ Debugging: Log FormData contents
    for (let [key, value] of formData.entries()) {
      console.log(`${key}:`, value);
    }
  
    try {
      const response = await axios.post(
        "http://localhost:5000/admin/addadoptpet",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
  
      if (response.status === 201) {
        alert("Adoptable pet added successfully!");
        await fetchAdoptPets();
        navigate("/admin/explorecategory");
      }
    } catch (error) {
      console.error("Error adding adoptable pet:", error);
      alert("Failed to add adoptable pet. Please try again.");
    }
  };
  

  
 

  return (
    <div className="admin-adopt-pet-container">
      <h2>Add New Adoptable Pet</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={petData.name}
            onChange={handleChange}
            required
            className="admin-adopt-pet-input"
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            name="description"
            value={petData.description}
            onChange={handleChange}
            required
            className="admin-adopt-pet-input"
          ></textarea>
        </div>
        <div>
          <label>Category:</label>
          <input
            type="text"
            name="category"
            value={petData.category}
            onChange={handleChange}
            required
            className="admin-adopt-pet-input"
          />
        </div>
        <div>
          <label>Image:</label>
          <input
            type="file"
            name="image"
            onChange={handleFileChange}
            required
            className="admin-adopt-pet-file-input"
          />
        </div>
        <button type="submit" className="admin-adopt-pet-submit-btn">
          Add Adoptable Pet
        </button>
      </form>
      {message.text && (
        <p className={message.type === "success" ? "success" : "error"}>
          {message.text}
        </p>
      )}
    </div>
  );
}

export default AdminAdoptPet;
