const mongoose = require('mongoose');
const Cart = require('../model/CartModel');

// Add product to cart
const addToCart = async (req, res) => {
  try {
    console.log("Request Body:", req.body);

    const { userId, productId, name, price, description, image, quantity } = req.body;

      
    // Validate inputs
    if (!userId || !productId || !quantity || !name || !price || !description) {
      return res.status(400).json({ message: "Missing required fields." });
    }
    // Validate userId and productId
    if (!mongoose.Types.ObjectId.isValid(userId) || !mongoose.Types.ObjectId.isValid(productId)) {
      return res.status(400).json({ error: 'Invalid userId or productId' });
    }

    // Check if the product already exists in the user's cart
    const existingProduct = await Cart.findOne({ userId, productId });

    if (existingProduct) {
      // Update the quantity if the product already exists
      existingProduct.quantity += quantity;
      await existingProduct.save();
      return res.status(200).json({ message: 'Product quantity updated', cart: existingProduct });
    }

      // If the product doesn't exist, create a new cart item
      const newCartItem = new Cart({
        userId,
        productId,
        name,
        price,
        description,
        image,
        quantity,
      });
  
      await newCartItem.save();
   
    res.status(201).json({ message: 'Product added to cart', cart: newCartItem });
  } catch (error) {
    console.error('Error adding product to cart:', error);
    res.status(500).json({ error: 'Error adding product to cart' });
  }
};

// Fetch cart items for a specific user
const getCart = async (req, res) => {
  try {
    const { userId } = req.query;

    // Validate userId
    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(400).json({ message: 'Invalid user ID' });
    }

    // Fetch the user's cart items
    const cartItems = await Cart.find({ userId });
    if (!cartItems || cartItems.length === 0) {
      return res.status(404).json({ message: 'Cart is empty', cartItems: [] });
    }

    res.status(200).json({ cartItems });
  } catch (err) {
    console.error('Error fetching cart:', err);
    res.status(500).json({ message: 'Error fetching cart' });
  }
};
    




// Remove product from cart
const removeFromCart = async (req, res) => {
  const { userId } = req.body;  // Ensure `userId` is retrieved from the request body
  const { id: productId } = req.params;  // Ensure `productId` is retrieved from route parameters

  console.log("Received request to remove from cart:", { userId, productId });

  if (!mongoose.Types.ObjectId.isValid(userId)) {
    console.log("Invalid user ID");
    return res.status(400).json({ message: 'Invalid user ID' });
  }

  if (!mongoose.Types.ObjectId.isValid(productId)){
    console.log("Invalid product ID");
    return res.status(400).json({ message: 'Invalid user ID or product ID' });
  }

  try {
    const cartItem = await Cart.findOne({ userId, productId });
    if (!cartItem) {
      console.log("Product not found in cart");
      return res.status(404).json({ message: 'Product not found in cart' });
    }

    await Cart.deleteOne({ userId, productId });
    console.log("Item removed from cart");
    res.status(200).json({ message: 'Item removed from cart', success: true });
  } catch (error) {
    console.error('Error removing product from cart:', error);
    res.status(500).json({ error: 'Error removing product from cart' });
  }
};


module.exports = { addToCart, getCart, removeFromCart };
