import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchCart = async () => {
      setLoading(true);
      const userId = localStorage.getItem('userId');
      if (!userId) {
        setError('Please log in first!');
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get(`http://localhost:5000/cart/getcart?userId=${userId}`);
        if (Array.isArray(response.data.cartItems)) {
          setCartItems(response.data.cartItems);
        } else {
          setCartItems([]);
        }
      } catch (err) {
        setError('Error fetching cart. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchCart();
  }, []);

  const addToCart = async (item) => {
    const userId = localStorage.getItem('userId');
    if (!userId) {
      alert('Please log in to add items to your cart.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/cart/add', {
        userId,
        productId: item._id,
        name: item.name,
        price: item.price,
        description: item.description,
        quantity: 1,
        image: item.image,
      });

      if (response.data.message === 'Product quantity updated') {
        setCartItems((prevItems) => {
          const updatedCart = [...prevItems];
          const existingItem = updatedCart.find((cartItem) => cartItem._id === item._id);
          if (existingItem) {
            existingItem.quantity += 1;
          } else {
            updatedCart.push({ ...item, quantity: 1 });
          }
          return updatedCart;
        });
        alert(`${item.name} added to cart.`);
      } else if (response.data.message === 'Product added to cart') {
        setCartItems((prevItems) => [...prevItems, { ...item, quantity: 1 }]);
        alert(`${item.name} added to cart.`);
      } else {
        console.error('Error from server:', response.data);
        throw new Error('Failed to add item to cart');
      }
    } catch (error) {
      console.error('Error adding to cart:', error);
      alert('Failed to add item to cart. Please try again.');
    }
  };

  // Remove item from cart
  const removeFromCart = async (productId) => {
    try {
      const userId = localStorage.getItem('userId');
      console.log(`Removing item with userId: ${userId} and productId: ${productId}`);
      const response = await axios.delete(`http://localhost:5000/cart/remove/${productId}`, {
        data: { userId }
      });
  
      if (response.status === 200) {
        setCartItems(prevItems => prevItems.filter(item => item._id !== productId));
        alert('Item removed from cart.');
      }
    } catch (error) {
      console.error('Error removing from cart:', error);
      alert('Error removing item from cart.');
    }
  };
  


    

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, loading, error }}>
      {children}
    </CartContext.Provider>
  );
};
