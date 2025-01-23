
const mongoose = require('mongoose');

// Define the schema for a product
const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    category: {
      type: String,
      required: true,
    },
    image: {
      type: String,  // This could be a URL to an image hosted on your server or cloud storage
      required: false, // Optional if you don't always have an image
    },
    stockQuantity: {
      type: Number,
      required: true,
      min: 0, // Ensure stock can't go negative
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true, // Automatically create `createdAt` and `updatedAt` fields
  }
);

// Create a model from the schema
const Product = mongoose.model('Product', productSchema);

module.exports = Product;
