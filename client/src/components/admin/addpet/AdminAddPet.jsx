import React, { useState } from "react";
import axios from "axios";

function AdminAddPet() {
  const [petData, setPetData] = useState({
    name: "",
    description: "",
    price: "",
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

  console.log(petData, 'petdata');
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", petData.name);
    formData.append("description", petData.description);
    formData.append("price", petData.price);
    formData.append("category", petData.category);
    formData.append("image", petData.image);

    for (const [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`);
    }
    try {
      const response = await axios.post("http://localhost:5000/admin/addpet", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setMessage({ text: response.data.msg, type: "success" });
    } catch (error) {
      setMessage({ text: "An error occurred while adding the pet.", type: "error" });
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <h2>Add New Pet</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={petData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            name="description"
            value={petData.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div>
          <label>Price:</label>
          <input
            type="number"
            name="price"
            value={petData.price}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Category:</label>
          <input
            type="text"
            name="category"
            value={petData.category}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Image:</label>
          <input
            type="file"
            name="image"
            onChange={handleFileChange}
            required
          />
        </div>
        <button type="submit">Add Pet</button>
      </form>
      {message.text && (
        <p
          style={{
            color: message.type === "success" ? "green" : "red",
            fontWeight: "bold",
          }}
        >
          {message.text}
        </p>
      )}
    </div>
  );
}

export default AdminAddPet;
