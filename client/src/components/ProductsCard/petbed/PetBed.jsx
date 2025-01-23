import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './PetBed.css';
import { useCart } from '../../../components/context/CartContext';

const PetBed = () => {
  const { addToCart } = useCart(); // Access addToCart function
  const [beds, setBeds] = useState([]); // State to store fetched beds
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    const fetchPetBeds = async () => {
      try {
        const response = await axios.get('http://localhost:5000/petbed/getbeds');
        setBeds(response.data); // Store fetched data in state
        setLoading(false); // Set loading to false
      } catch (err) {
        setError('Error fetching pet beds. Please try again later.');
        setLoading(false); // Set loading to false in case of error
      }
    };

    fetchPetBeds();
  }, []); // Run only once on component mount

  const handleAddToCart = async (item) => {
    try {
      await addToCart(item); // Add the item to the cart
      alert(`${item.name} added to cart!`); // Feedback for the user
    } catch (err) {
      console.error('Error adding item to cart:', err);
      setError('Error adding the item to the cart.');
    }
  };

  if (loading) {
    return <div>Loading pet beds...</div>; // Show loading text while waiting for data
  }

  if (error) {
    return <div>{error}</div>; // Show error message if there's an issue
  }

  return (
    <div>
      <h1>Pet Beds</h1>
      <div className="pet-bed-container">
        {beds.length === 0 ? (
          <div>No pet beds available at the moment.</div> // Handle case where no beds are fetched
        ) : (
          beds.map((item) => (
            <div key={item._id} className="pet-bed-item">
              <img
                src={`http://localhost:5000/uploads/${item.image}`} // Replace with actual image URL
                alt={item.name}
                className="pet-bed-image"
              />
              <h4 className="pet-bed-name">{item.name}</h4>
              <p className="pet-bed-description">{item.description}</p>
              <h3 className="pet-bed-price">${item.price}</h3>
              <button
                className="add-to-cart-button"
                onClick={() => handleAddToCart(item)}
              >
                Add to Cart
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default PetBed;
