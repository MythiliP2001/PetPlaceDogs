
const express = require('express');
const Order = require('../model/OrderModel');
const User = require('../model/userModel');
const Cart = require('../model/CartModel')
const Ctrl = require('../control/CartControl');


const placeOrder = async (req, res) => {
    console.log(req.body);
    
    const { userId, items, shippingAddress, totalPrice , paymentMethod} = req.body;
  
    try {
      // Check if the user exists
      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).json({ success: false, message: 'User not found' });
      }
  
      // Check if cart items are provided
      if (!items || items.length === 0) {
        return res.status(400).json({ success: false, message: 'No items in the cart to place an order.' });
      }
      // Create the order
    const newOrder = new Order({
        userId,
        items,
        shippingAddress,
        totalPrice,
        paymentMethod,
        // status: 'Pending',
      });
  
      // Save the order to the database
      await newOrder.save();

      // Optionally: Clear the cart after order placement
    // await Cart.updateOne(
    //     { userId },
    //     { $set: { items: [] } }  
    //   );

      // Return a success response
    res.status(201).json({
        success: true,
        message: 'Order placed successfully',
        order: newOrder,
      });
    } catch (err) {
      console.error('Error placing order:', err);
      res.status(500).json({
        success: false,
        message: 'An error occurred while placing the order. Please try again.',
      });
    }
  };

// Get all orders for the admin
// const getAllOrders = async (req, res) => {
//   try {
//     // Fetch all orders from the database
//     const orders = await Order.find().populate('userId', 'name email'); // You can populate user details if needed

//     res.status(200).json({ success: true, orders });
//   } catch (err) {
//     console.error('Error fetching orders:', err);
//     res.status(500).json({ success: false, message: 'An error occurred while fetching orders.' });
//   }
// };





  module.exports= {placeOrder};

      