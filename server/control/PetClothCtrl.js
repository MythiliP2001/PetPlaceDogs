const PetCloth = require('../model/PetClothModel');

// Get all pet clothes
const getPetClothes = async (req, res) => {
  console.log('Received GET request'); 
  try {
    const clothes = await PetCloth.find();
    console.log('Fetched clothes:', clothes);
    res.status(200).json(clothes);
  } catch (error) {
    console.error('Error fetching clothes:', error);
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
    console.error('Error adding cloth:', error);
    res.status(500).json({ error: 'Failed to add pet cloth.' });
  }
};

// Delete a pet cloth
const deletePetCloth = async (req, res) => {
  const { id } = req.params;
  console.log(`Received DELETE request for ID: ${id}`);

  try {
    const petCloth = await PetCloth.findById(id);
    if (!petCloth) {
      return res.status(404).json({ error: 'Pet cloth not found.' });
    }
    await PetCloth.findByIdAndDelete(id);
    console.log(`Deleted pet cloth with ID: ${id}`);
    res.status(200).json({ message: 'Pet cloth deleted successfully.' });
  } catch (error) {
    console.error('Error deleting pet cloth:', error);
    res.status(500).json({ error: 'Failed to delete pet cloth.' });
  }
};

// Edit an existing pet cloth
const editPetCloth = async (req, res) => {
  const { id } = req.params; // Get the ID of the pet cloth to edit
  const { name, description, price, category } = req.body; // Extract the updated data from the request body

  // Check if a new image was uploaded, otherwise, keep the existing one
  const image = req.file ? req.file.filename : undefined;

  try {
    // Find the pet cloth by ID
    const petCloth = await PetCloth.findById(id);
    if (!petCloth) {
      return res.status(404).json({ error: 'Pet cloth not found' });
    }

    // Update the fields with the new data
    petCloth.name = name || petCloth.name;
    petCloth.description = description || petCloth.description;
    petCloth.price = price || petCloth.price;
    petCloth.category = category || petCloth.category;
    if (image) petCloth.image = image;

    // Save the updated pet cloth
    await petCloth.save();

    res.status(200).json({ msg: 'Pet cloth updated successfully', petCloth });
  } catch (error) {
    console.error('Error updating pet cloth:', error);
    res.status(500).json({ error: 'Failed to update pet cloth' });
  }
};


module.exports = {
  getPetClothes,
  addPetCloth,
  deletePetCloth,
  editPetCloth
};
