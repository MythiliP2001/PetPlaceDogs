const mongoose = require('mongoose');

const petToySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

const PetToy = mongoose.model('PetToy', petToySchema);

module.exports = PetToy;
