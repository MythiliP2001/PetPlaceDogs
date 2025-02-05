const PetToy = require('../model/PetToyModel');

// Get all pet toys
const getPetToys = async (req, res) => {
    console.log('GET request received at /pettoy/gettoys');
  try {
    const toys = await PetToy.find();
    res.status(200).json(toys);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching pet toys', error });
  }
};

// Create a new pet toy
const addPetToy = async (req, res) => {
  console.log('POST request received at /pettoy/addtoy');
    try {
      const { name, description, price,category } = req.body;
      
      console.log(req.body);
      const image = req.file ? req.file.filename : null;
       // Assuming you're using multer for image upload
  
      const newToy = new PetToy({
        name,
        description,
        price,
        category,
        image,
      });
      await newToy.save();
      res.status(201).json({ message: 'Pet toy added successfully', product: newToy });
    } catch (error) {
      console.error('Error adding pet toy:', error);
      res.status(500).json({ message: 'Error adding pet toy', error });
    }
  };
  




// Delete a pet toy
const deletePetToy = async (req, res) => {
  try {
    const toy = await PetToy.findByIdAndDelete(req.params.id);
    if (!toy) {
      return res.status(404).json({ message: 'Pet toy not found' });
    }
    res.status(200).json({ message: 'Pet toy deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting pet toy', error });
  }
};

module.exports = {
  getPetToys,
  addPetToy,
  deletePetToy,
};
