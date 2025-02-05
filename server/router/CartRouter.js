const express = require('express');
const router = express.Router();
const { getCart, addToCart, removeFromCart } = require('../control/CartControl');

router.get("/getcart", getCart);
router.post("/add", addToCart);
router.delete('/remove/:id', removeFromCart);  // Confirm this is correct

module.exports = router;
