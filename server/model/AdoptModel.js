// models/adoptModel.js
const mongoose = require('mongoose');

const adoptPetSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  image: {
    type: String, // Image file path or filename
    required: true,
  },
  adoptionStatus: {
    type: Boolean,
    default: true, // Indicates whether the pet is available for adoption
  },
}, { timestamps: true });

const AdoptPet = mongoose.model('AdoptPet', adoptPetSchema);

module.exports = AdoptPet;
