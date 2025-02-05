import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './PetCloth.css';
import { useCart } from '../../../components/context/CartContext';

const PetCloth = () => {
  const { addToCart } = useCart();
  const [clothes, setClothes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

 
 
  useEffect(() => {
    const fetchPetClothes = async () => {
      try {
        const { data } = await axios.get('http://localhost:5000/petcloth/getcloth');
        setClothes(data);
      } catch (error) {
        setError('Error fetching pet clothes. Please try again later.');
      } finally {
        setLoading(false); // Ensures loading state is updated
      }
    };
  
    fetchPetClothes();
  }, []);
  
  // Empty dependency array to run only once when component mounts

  const handleAddToCart = async (item) => {
    try {
      await addToCart(item);
      alert(`${item.name} added to cart!`);
    } catch (err) {
      console.error("Error adding item to cart:", err);
      setError("error adding the item to the cart.");
    }
  };

  if (loading) {
    return <div>Loading pet clothes...</div>; // Show loading text while waiting for data
  }

  if (error) {
    return <div>{error}</div>; // Show error message if there's an issue
  }

  return (
    <div>
      <h1>Pet Clothes</h1>
      <div className="pet-cloth-container">
        {clothes.length === 0 ? (
          <div>No pet clothes available at the moment.</div> // Handle case where no clothes are fetched
        ) : (
          clothes.map((item) => (
            <div key={item._id} className="pet-cloth-item">
              <img
                src={`http://localhost:5000/uploads/${item.image}`} // Fallback image
               
                alt={item.name}
                className="pet-cloth-image"
              />
              <h4 className="pet-cloth-name">{item.name}</h4>
              <p className="pet-cloth-description">{item.description}</p>
              <h3 className="pet-cloth-price">${item.price}</h3>
              <button
                className="add-to-cart-button"
                onClick={() => handleAddToCart(item)}
                disabled={loading}
              >
                 {loading ? 'Adding...' : 'Add to Cart'}
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default PetCloth;
