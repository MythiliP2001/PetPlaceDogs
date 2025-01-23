import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useCart } from '../context/CartContext';
import './Cart.css'; // Import the Cart.css file
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cartItems, setCartItems } = useCart();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCartItems = async () => {
      const userId = localStorage.getItem('userId');
      if (!userId) {
        setError('Please log in to view your cart.');
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get(`http://localhost:5000/cart/getcart?userId=${userId}`);
        console.log("Cart Items:", cartItems);

        setCartItems(response.data.cartItems);
        setLoading(false);
      } catch (error) {
        setError('Error fetching cart items. Please try again.');
        setLoading(false);
      }
    };

    fetchCartItems();
  }, [setCartItems]);

  const handleCheckOut = () => {
    navigate('/checkout');
  }

  const handleRemoveItem = async ( productId) => {
    const userId = localStorage.getItem('userId');
    // console.log(`Removing item - User ID: ${userId}, Product ID: ${productId}`);

    console.log("UserID:", userId);
  console.log("ProductID:", productId);
  if (!userId) {
    alert('Please log in first.');
    return;
  }
    try {
      const response =
      await axios.delete(`http://localhost:5000/cart/remove?userId=${userId}&productId=${productId}`);

      console.log(response.data); 

      if (response.data.success === 'item removedd from cart') {
      setCartItems((prevItems) => prevItems.filter((item) => item._id !== productId));  // Use _id if that's the key
      alert('Item removed from the cart.');
    } else {
      alert('Failed to remove item. Please try again.');
    }
  } catch (error) {
    alert('Failed to remove item. Please try again.');
    console.error('Error removing item:', error);
  }
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
                  <img src={`http://localhost:5000/uploads/${item.image}`} alt={item.productId.name} />
                  <strong>{item.name}</strong>
                  <p>Price: ${item.price}</p>
                  <p>Description: {item.description}</p>
                  <p>Category: {item.category}</p>
                  <p className="quantity">Quantity: {item.quantity}</p>
                </div>
                <button onClick={() => handleRemoveItem(item._id)}>Remove</button>
               
                </li>
                

            ))}
             <button onClick={handleCheckOut}>Proceed to Checkout</button> {/* This line is corrected */}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Cart;
