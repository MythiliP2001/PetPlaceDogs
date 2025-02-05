import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './PetBed.css';
import { useCart } from '../../../components/context/CartContext';

const PetBed = () => {
  const { addToCart } = useCart(); 
  const [beds, setBeds] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPetBeds = async () => {
      try {
        const response = await axios.get('http://localhost:5000/petbed/getbeds');
        console.log("Fetched pet beds:", response.data);
        setBeds(response.data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching pet beds:', err);
        setError('Error fetching pet beds. Please try again later.');
        setLoading(false);
      }
    };

    fetchPetBeds();
  }, []);

  const handleAddToCart = async (item) => {
    try {
      await addToCart(item); 
      alert(`${item.name} added to cart!`); 
    } catch (err) {
      console.error('Error adding item to cart:', err);
      setError('Error adding the item to the cart.');
    }
  };

  if (loading) {
    return <div className="loading-message">Loading pet beds...</div>;
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  return (
    <div className="pet-bed-page">
      <h1 className="pet-bed-title">Pet Beds</h1>
      <div className="pet-bed-list">
        {beds.length === 0 ? (
          <div className="no-beds-message">No pet beds available at the moment.</div>
        ) : (
          beds.map((item) => (
            <div key={item._id} className="pet-bed-item">
              <img
                src={`http://localhost:5000/uploads/${item.image}`}
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
