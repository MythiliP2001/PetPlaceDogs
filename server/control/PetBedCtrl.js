// controllers/petBedController.js

const PetBed = require('../model/PetBedModel');

// Get all pet beds
const getPetBeds = async (req, res) => {
  try {
    const beds = await PetBed.find();
    res.json(beds);
  } catch (error) {
    console.error('Error fetching pet beds:', error);
    res.status(500).json({ error: 'Failed to fetch pet beds' });
  }
};

// Add a new pet bed
const addPetBed = async (req, res) => {
    try {
      const { name, description, price, category } = req.body;
  
      // Validate required fields
      if (!name || !description || !price || !category) {
        return res.status(400).json({ error: 'All fields are required' });
      }
  
      // If image is uploaded, include it in the document
      const image = req.file ? req.file.filename : null;
  
      const newBed = new PetBed({
        name,
        description,
        price,
        category,
        image,
      });
      await newBed.save();
      res.status(201).json({ msg: 'Pet bed added successfully', bed: newBed });
    } catch (error) {
      console.error('Error adding pet bed:', error);
      res.status(400).json({ error: 'Failed to add pet bed' });
    }
  };
  // Delete a pet bed
const deletePetBed = async (req, res) => {
  const { id } = req.params;
  
  try {
    const petBed = await PetBed.findById(id);
    
    // Check if the pet bed exists
    if (!petBed) {
      return res.status(404).json({ error: 'Pet bed not found' });
    }

    // Delete the pet bed
    await PetBed.findByIdAndDelete(id);
    
    res.status(200).json({ message: 'Pet bed deleted successfully' });
  } catch (error) {
    console.error('Error deleting pet bed:', error);
    res.status(500).json({ error: 'Failed to delete pet bed' });
  }
};

const editPetBed = async (req, res) => {
  const { id } = req.params;
  const { name, description, price, category } = req.body;
  const image = req.file ? req.file.filename : undefined; // Only update image if a new file is uploaded

  try {
    // Find the pet bed by ID
    const petBed = await PetBed.findById(id);

    if (!petBed) {
      return res.status(404).json({ error: "Pet bed not found" });
    }

    // Update only the provided fields
    petBed.name = name ?? petBed.name;
    petBed.description = description ?? petBed.description;
    petBed.price = price ?? petBed.price;
    petBed.category = category ?? petBed.category;
    if (image) petBed.image = image;

    // Save the updated pet bed
    await petBed.save();
    
    res.status(200).json({ msg: "Pet bed updated successfully", bed: petBed });
  } catch (error) {
    console.error("Error updating pet bed:", error);
    res.status(500).json({ error: "Failed to update pet bed" });
  }
};





module.exports = {
  getPetBeds,
  addPetBed,
  deletePetBed,
  editPetBed
};
