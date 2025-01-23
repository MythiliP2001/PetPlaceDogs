const PetCloth = require('../model/PetClothModel');

// Get all pet clothes
const getPetClothes = async (req, res) => {
  console.log('Received GET request'); 
  try {
    const clothes = await PetCloth.find();
    res.status(200).json(clothes);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch pet clothes.' });
  }
};

// Add a new pet cloth
const addPetCloth = async (req, res) => {
  const { name, description, price } = req.body;
  const image = req.file ? req.file.filename : null;
  console.log("Uploaded image:", image);
  
  try {
    const newCloth = new PetCloth({ name, description, price, image });
    await newCloth.save();
    res.status(201).json(newCloth);
  } catch (error) {
    res.status(500).json({ error: 'Failed to add pet cloth.' });
  }
};

// Delete a pet cloth
const deletePetCloth = async (req, res) => {
  const { id } = req.params;
  try {
    const petCloth = await PetCloth.findById(id);
    if (!petCloth) {
      return res.status(404).json({ error: 'Pet cloth not found.' });
    }
    await PetCloth.findByIdAndDelete(id);
    res.status(200).json({ message: 'Pet cloth deleted successfully.' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete pet cloth.' });
  }
};

module.exports = {
  getPetClothes,
  addPetCloth,
  deletePetCloth,
};
