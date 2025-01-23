

const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
  name: { type: String, required: false },  // Made optional
  price: { type: Number, required: false },  // Made optional
  description: { type: String, required: false },  // Made optional
  image: { type: String, required: false },  // Made optional
  quantity: { type: Number, required: true }
}, {
  timestamps: true
});

const Cart = new mongoose.model('Cart', cartSchema);
module.exports = Cart;
