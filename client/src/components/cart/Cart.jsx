import React, { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import './Cart.css';

const Cart = () => {
  const { cartItems, removeFromCart, loading, error } = useCart();
  const [userId, setUserId] = useState(localStorage.getItem('userId'));
  const navigate = useNavigate();

  useEffect(() => {
    setUserId(localStorage.getItem('userId'));
  }, []);

  const handleCheckOut = () => {
    navigate('/checkout');
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          <ul>
            {cartItems.map((item) => (
              <li key={item._id} className="cart-item">
                <div>
                  <img src={`http://localhost:5000/uploads/${item.image}`} alt={item.name} />
                  <strong>{item.name}</strong>
                  <p>Price: ${item.price}</p>
                  <p>Description: {item.description}</p>
                  <p>Category: {item.category}</p>
                  <p className="quantity">Quantity: {item.quantity}</p>
                </div>
                <button onClick={() => removeFromCart(item._id)}>Remove</button>
              </li>
            ))}
            <button onClick={handleCheckOut}>Proceed to Checkout</button>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Cart;
