import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import './Checkout.css'; // Import the Checkout.css file

const Checkout = () => {
  const { cartItems, setCartItems } = useCart();
  const [totalPrice, setTotalPrice] = useState(0);
  const [shippingAddress, setShippingAddress] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [orderPlaced, setOrderPlaced] = useState(false); // To track if the order has been placed
  const [paymentMethod, setPaymentMethod] = useState('COD'); // Default payment method is Cash on Delivery (COD)
  const [razorpayOrderId, setRazorpayOrderId] = useState(null); // For Razorpay Order ID

  const navigate = useNavigate(); // Initialize useNavigate for navigation

  useEffect(() => {
    
    if (cartItems.length > 0) {
      const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
      setTotalPrice(total);
    }
  }, [cartItems]);

  const handleAddressChange = (e) => {
    setShippingAddress(e.target.value);
  };

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value); // Update payment method based on user's selection
  };

  const handlePlaceOrder = async () => {
    const userId = localStorage.getItem('userId');
    if (!userId) {
      setError('Please log in to place an order.');
      return;
    }

    if (!shippingAddress) {
      setError('Please enter your shipping address.');
      return;
    }

    try {
      setLoading(true);
      const orderData = {
        userId,
        items: cartItems,
        shippingAddress,
        totalPrice,
        paymentMethod, // Include payment method in order data
      };

      if (paymentMethod === 'Razorpay') {
        // For Razorpay, we need to create an order on the backend
        const razorpayOrderResponse = await axios.post('http://localhost:5000/orders/createRazorpayOrder', {
          totalPrice,
        });

        if (razorpayOrderResponse.data.success) {
          setRazorpayOrderId(razorpayOrderResponse.data.orderId);
          initiateRazorpayPayment(razorpayOrderResponse.data.orderId, razorpayOrderResponse.data.amount);
        } else {
          setError('Error creating Razorpay order. Please try again.');
        }
      } else {
        // For COD, no Razorpay integration required, just place the order
        const response = await axios.post('http://localhost:5000/orders/place', orderData);
        if (response.data.success) {
          setOrderPlaced(true); // Set orderPlaced to true when order is placed successfully
          setCartItems([]);
          console.log('Order placed successfully!');
          console.log('Order details:', {
            userId,
            items: cartItems,
            shippingAddress,
            totalPrice,
            paymentMethod,
          });
        } else {
          setError('Error placing the order. Please try again.');
        }
      }
    } catch (err) {
      setError('Error placing the order. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Razorpay integration
  const initiateRazorpayPayment = (orderId, amount) => {
    const options = {
      key: 'YOUR_RAZORPAY_KEY', // Your Razorpay key here
      amount: amount * 100, // Amount should be in paise (1 INR = 100 paise)
      currency: 'INR',
      order_id: orderId,
      name: 'Your Store Name',
      description: 'Order Payment',
      handler: function (response) {
        handleRazorpaySuccess(response);
      },
      prefill: {
        name: 'Customer Name', // You can customize these
        email: 'customer@example.com',
        contact: '9999999999',
      },
      theme: {
        color: '#F37254', // You can change the color theme here
      },
    };

    const razorpay = new window.Razorpay(options);
    razorpay.open();
  };

  const handleRazorpaySuccess = async (response) => {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = response;

    try {
      // Send the payment details to the backend for verification
      const verificationResponse = await axios.post('http://localhost:5000/orders/verifyRazorpayPayment', {
        orderId: razorpay_order_id,
        paymentId: razorpay_payment_id,
        signature: razorpay_signature,
      });

      if (verificationResponse.data.success) {
        setOrderPlaced(true); // Set orderPlaced to true when order is placed successfully
        setCartItems([]); // Clear the cart after successful order
      } else {
        setError('Payment verification failed. Please try again.');
      }
    } catch (err) {
      setError('Payment verification failed. Please try again.');
    }
  };

  const handleContinueShopping = () => {
    navigate('/'); // Redirect to the home page when the "Continue Shopping" button is clicked
  };

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      {error && <div className="error-message">{error}</div>}

      {orderPlaced ? (
        <div className="order-summary">
          <h3>Order Summary</h3>
          <p><strong>Shipping Address:</strong> {shippingAddress}</p>
          <ul>
            {cartItems.map((item) => (
              <li key={item._id} className="checkout-item">
                <img
                  src={`http://localhost:5000/uploads/${item.image}`}
                  alt={item.name}
                  className="checkout-item-image"
                />
                <div>
                  <strong>{item.name}</strong>
                  <p>Price: ${item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className="checkout-summary">
            <p><strong>Total Price: </strong>${totalPrice}</p>
          </div>
          <p>Your order has been successfully placed! Thank you for shopping with us.</p>
          <button className="continue-shopping-button" onClick={handleContinueShopping}>
            Continue Shopping
          </button>
        </div>
      ) : (
        <div className="checkout-items">
          {cartItems.length === 0 ? (
            <p>Your cart is empty. Please add items to the cart before proceeding.</p>
          ) : (
            <>
              <ul>
                {cartItems.map((item) => (
                  <li key={item._id} className="checkout-item">
                    <img
                      src={`http://localhost:5000/uploads/${item.image}`}
                      alt={item.name}
                      className="checkout-item-image"
                    />
                    <div>
                      <strong>{item.name}</strong>
                      <p>Price: ${item.price}</p>
                      <p>Quantity: {item.quantity}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="checkout-summary">
                <p><strong>Total Price: </strong>${totalPrice}</p>
              </div>
              <div className="checkout-address">
                <textarea
                  placeholder="Enter your shipping address"
                  value={shippingAddress}
                  onChange={handleAddressChange}
                />
              </div>

              {/* Payment Method Section */}
              <div className="payment-method">
                <label>
                  <input
                    type="radio"
                    value="COD"
                    checked={paymentMethod === 'COD'}
                    onChange={handlePaymentMethodChange}
                  />
                  Cash on Delivery
                </label>
                <label>
                  <input
                    type="radio"
                    value="Razorpay"
                    checked={paymentMethod === 'Razorpay'}
                    onChange={handlePaymentMethodChange}
                  />
                  Razorpay
                </label>
              </div>

              <button
                className="checkout-button"
                onClick={handlePlaceOrder}
                disabled={loading}
              >
                {loading ? 'Placing order...' : 'Place Order'}
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Checkout;
