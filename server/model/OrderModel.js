const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    items: [
      {
        productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
        name: { type: String, required: true },
        price: { type: Number, required: true },
        quantity: { type: Number, required: true },
        image: { type: String, required: false },
      },
    ],
    shippingAddress: { type: String, required: true },
    totalPrice: { type: Number, required: true },
    status: { type: String, default: 'Pending' },
    paymentStatus: { type: String, default: 'Unpaid' }, // Added payment status
    paymentMethod: { type: String, required: true }, // Added paymen
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
