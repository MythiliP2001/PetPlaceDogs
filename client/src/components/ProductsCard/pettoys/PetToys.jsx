import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './PetToys.css'; // Unique CSS file
import { useCart } from '../../../components/context/CartContext';

const PetToys = () => {
  const { addToCart } = useCart(); // Access addToCart function
  const [toys, setToys] = useState([]); // Store toys fetched from the backend
  const [loading, setLoading] = useState(true); // Loading state for fetching data

  useEffect(() => {
    const fetchPetToys = async () => {
      try {
        const response = await axios.get('http://localhost:5000/pettoy/gettoy'); // Adjust endpoint if needed
        setToys(response.data); // Set the fetched toys into state
      } catch (error) {
        console.error('Error fetching pet toys:', error);
      } finally {
        setLoading(false); // Set loading state to false once the data is fetched
      }
    };

    fetchPetToys();
  }, []);

  const handleAddToCart = (item) => {
    addToCart(item); // Add the item to the cart
    alert(`${item.name} added to cart!`); // Provide feedback to the user
  };

  return (
    <div className="pet-toys-page">
      <h1 className="pet-toys-title">Pet Toys</h1>
      {loading ? (
        <div className="pet-toys-loading">Loading pet toys...</div>
      ) : (
        <div className="pet-toys-grid">
          {toys.length === 0 ? (
            <div className="pet-toys-empty">No pet toys available at the moment.</div>
          ) : (
            toys.map((item) => (
              <div key={item._id} className="pet-toys-card">
                <img
                  src={`http://localhost:5000/uploads/${item.image}`} // Use image path from server
                  alt={item.name}
                  className="pet-toys-img"
                />
                <h4 className="pet-toys-name">{item.name}</h4>
                <p className="pet-toys-desc">{item.description}</p>
                <h3 className="pet-toys-price">${item.price}</h3>
                <button className="pet-toys-btn" onClick={() => handleAddToCart(item)}>
                  Add to Cart
                </button>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default PetToys;
