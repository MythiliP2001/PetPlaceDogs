import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './PetFood.css';
import { useCart } from '../../../components/context/CartContext';

const PetFood = () => {
  const { addToCart } = useCart(); // Access addToCart function
  const [foods, setFoods] = useState([]); // Store foods fetched from the backend

  useEffect(() => {
    // Fetch pet food data from the server
    const fetchPetFood = async () => {
      try {
        const response = await axios.get('http://localhost:5000/petfood/getfood');
        setFoods(response.data); // Set the fetched foods into state
      } catch (error) {
        console.error('Error fetching pet food:', error);
      }
    };

    fetchPetFood();
  }, []);

  const handleAddToCart = (item) => {
    addToCart(item); // Add the item to the cart
    alert(`${item.name} added to cart!`); // Provide feedback to the user
  };

  return (
    <div>
      <h1>Pet Food</h1>
      <div className="pet-food-container">
        {foods.length === 0 ? (
          <div>No pet food available at the moment.</div>
        ) : (
          foods.map((item) => (
            <div key={item._id} className="pet-food-item">
              <img
                src={`http://localhost:5000/uploads/${item.image}`} // Use image path from server
                alt={item.name}
                className="pet-food-image"
              />
              <h4 className="pet-food-name">{item.name}</h4>
              <p className="pet-food-description">{item.description}</p>
              <h3 className="pet-food-price">${item.price}</h3>
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

export default PetFood;
