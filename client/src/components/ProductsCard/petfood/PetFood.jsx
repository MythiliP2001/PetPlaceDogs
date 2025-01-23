

import React from 'react';
import { food } from '../../../assets/assets';
import './PetFood.css';
import { useCart } from '../../../components/context/CartContext';

const PetFood = () => {
    const { addToCart } = useCart(); // Access addToCart function
  
    const handleAddToCart = (item) => {
      addToCart(item); // Add the item to the cart
      alert(`${item.name} added to cart!`); // Optional feedback for the user
    };
 
  return (

    <div>
    
      <h1>Pet Food</h1>
      <div className="pet-food-container">
     
      {food.map((item) => (
        <div key={item._id} className="pet-food-item">
          <img src={item.image} 
          alt={item.name} 
          className="pet-food-image" 
          />
          <h4 className="pet-food-name">{item.name}</h4>
          <p className="pet-food-description">{item.description}</p>
          <h3 className="pet-food-price">${item.price} </h3>
          <button 
              className="add-to-cart-button" 
              onClick={() => handleAddToCart(item)}
            >
              Add to Cart
            </button>
        </div>
      ))}
    </div>
    </div>
  );
};

export default PetFood;
