const PetFood = require('../model/PetFoodModel');

// Get all pet foods
const getPetFoods = async (req, res) => {
    console.log('Request received at /getfood');
  try {
    const foods = await PetFood.find();
    res.json(foods);
  } catch (error) {
    console.error('Error fetching pet foods:', error);
    res.status(500).json({ error: 'Failed to fetch pet foods' });
  }
};

// Add a new pet food
const addPetFood = async (req, res) => {
  try {
    const { name, description, price,category } = req.body;

    // Validate required fields
    if (!name || !description || !price || !category) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Include the image if uploaded
    const image = req.file ? req.file.filename : null;

    const newFood = new PetFood({
      name,
      description,
      price,
      image,
    });

    await newFood.save();
    res.status(201).json({ msg: 'Pet food added successfully', food: newFood });
  } catch (error) {
    console.error('Error adding pet food:', error);
    res.status(400).json({ error: 'Failed to add pet food' });
  }
};
// Delete a pet food
const deletePetFood = async (req, res) => {
  const { id } = req.params;

  try {
    // Find the pet food by ID
    const petFood = await PetFood.findById(id);

    // Check if the pet food exists
    if (!petFood) {
      return res.status(404).json({ error: 'Pet food not found' });
    }

    // Delete the pet food from the database
    await PetFood.findByIdAndDelete(id);

    res.status(200).json({ message: 'Pet food deleted successfully' });
  } catch (error) {
    console.error('Error deleting pet food:', error);
    res.status(500).json({ error: 'Failed to delete pet food' });
  }
};
const editPetFood = async (req, res) => {
  const { id } = req.params;
  const { name, description, price, category } = req.body;
  const image = req.file ? req.file.filename : undefined; // Update image only if a new file is uploaded

  try {
    // Find the pet food by ID
    const petFood = await PetFood.findById(id);

    if (!petFood) {
      return res.status(404).json({ error: "Pet food not found" });
    }

    // Update only the provided fields
    petFood.name = name ?? petFood.name;
    petFood.description = description ?? petFood.description;
    petFood.price = price ?? petFood.price;
    petFood.category = category ?? petFood.category;
    if (image) petFood.image = image;

    // Save the updated pet food
    await petFood.save();

    res.status(200).json({ msg: "Pet food updated successfully", food: petFood });
  } catch (error) {
    console.error("Error updating pet food:", error);
    res.status(500).json({ error: "Failed to update pet food" });
  }
};



module.exports = { getPetFoods, addPetFood , deletePetFood, editPetFood};
