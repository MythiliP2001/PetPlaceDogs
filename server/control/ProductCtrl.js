
const express = require('express');
const Order = require('../model/OrderModel');
const User = require('../model/userModel');
const Cart = require('../model/CartModel')
const Ctrl = require('../control/CartControl');



// Get all orders for the admin
const getAllOrders = async (req, res) => {
    try {
      // Fetch all orders from the database
      const orders = await Order.find().populate('userId', 'name email'); // You can populate user details if needed
  
      res.status(200).json({ success: true, orders });
    } catch (err) {
      console.error('Error fetching orders:', err);
      res.status(500).json({ success: false, message: 'An error occurred while fetching orders.' });
    }
  };

  module.exports={getAllOrders}