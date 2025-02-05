// controllers/adoptCtrl.js
const mongoose = require('mongoose');
const AdoptPet = require('../model/AdoptModel'); // Import the AdoptPet model

// Add new adoptable pet
const addAdoptPet = async (req, res) => {
  try {
    const { name, description, category } = req.body;
    const image = req.file ? req.file.filename : null; // Handling file upload

    if (!name || !description || !category || !image) {
      return res.status(400).json({ status: 0, msg: "All fields are required" });
    }

    // Check if the pet already exists
    const existingPet = await AdoptPet.findOne({ name });
    if (existingPet) {
      return res.status(400).json({ status: 0, msg: "Adoptable pet with the same name already exists" });
    }

    // Create new adoptable pet
    const newAdoptPet = new AdoptPet({ name, description, category, image, adoptionStatus: true });
    await newAdoptPet.save();

    res.status(201).json({ status: 1, msg: "Adoptable pet added successfully", data: newAdoptPet });
  } catch (error) {
    res.status(500).json({ status: 0, msg: "Server Error", error: error.message });
  }
};

// Fetch all adoptable pets
const fetchAdoptablePets = async (req, res) => {
  try {
    const adoptablePets = await AdoptPet.find({ adoptionStatus: true });
    return res.status(200).json({ adoptablePets });
  } catch (error) {
    console.error("Error fetching adoptable pets:", error);
    res.status(500).json({ status: 0, msg: "Server Error", error: error.message });
  }
};

// Fetch adoptable pet by ID
const fetchAdoptablePetById = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid ID format" });
  }
  try {
    const pet = await AdoptPet.findById(id);
    if (!pet || !pet.adoptionStatus) {
      return res.status(404).json({ message: 'Adoptable pet not found' });
    }
    res.status(200).json(pet);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update adoptable pet information
const updateAdoptablePet = async (req, res) => {
  const { id } = req.params;
  const updates = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid ID format" });
  }

  try {
    const updatedPet = await AdoptPet.findByIdAndUpdate(id, updates, { new: true });
    if (!updatedPet) {
      return res.status(404).json({ message: "Adoptable pet not found" });
    }

    res.status(200).json(updatedPet);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete an adoptable pet
const deleteAdoptablePet = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid ID format" });
  }

  try {
    const deletedPet = await AdoptPet.findByIdAndDelete(id);
    if (!deletedPet || !deletedPet.adoptionStatus) {
      return res.status(404).json({ message: "Adoptable pet not found" });
    }

    res.status(200).json({ message: "Adoptable pet deleted successfully", data: deletedPet });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { addAdoptPet, fetchAdoptablePets, fetchAdoptablePetById, updateAdoptablePet, deleteAdoptablePet };
