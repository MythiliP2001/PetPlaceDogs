import React from 'react';
import { acc } from '../../../assets/assets';
import './PetToys.css';
import { useCart } from '../../../components/context/CartContext'; 

const PetToys = () => {
    const { addToCart } = useCart();


  const handleAddToCart = (item) => {
    addToCart(item); // Add the item to the cart
    alert(`${item.name} added to cart!`); // Optional feedback for the user
  };
 
  return (

    <div>
    
      <h1>Pet Toys</h1>
      <div className="pet-acc-container">
     
      {acc.map((item) => (
        <div key={item._id} className="pet-acc-item">
          <img src={item.image} 
          alt={item.name}
           className="pet-acc-image" />
          <h4 className="pet-acc-name">{item.name}</h4>
          <p className="pet-acc-description">{item.description}</p>
          <h3 className="pet-acc-price">${item.price} </h3>
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

export default PetToys;
