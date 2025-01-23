const  mongoose = require("mongoose");

// Schema definition
const petSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    image: { type: String, required: true },
  },
  { timestamps: true }
);

// Model creation
const PetModel = new mongoose.model("Pet", petSchema);

module.exports = PetModel;
