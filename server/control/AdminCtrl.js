const PetModel = require("../model/AdminModel");

const AdminAddPet = async (req, res) => {
  try {
    // console.log(req.body, 'req.body');
    
    const { name, description, price, category} = req.body;
    const image = req.file ? req.file.filename : null; // Handling file upload
    console.log("Uploaded image:", image);

    if (!name || !description || !price || !category || !image) {
      return res.status(400).json({ status: 0, msg: "All fields are required" });
    }

    console.log(name, 'image');
    const findpet = await PetModel.findOne({name: name})
    console.log(findpet, 'findpet');

    // check existing
    const existingPet = await PetModel.findOne({ name });
    if (existingPet) {
      return res.status(400).json({ status: 0, msg: "Pet with the same name already exists" });
    }

    
    // crate new pet
    const newPet =  new PetModel({ name, description, price, category, image })
    console.log("Saving pet with image:", newPet);
    await newPet.save();
    console.log(newPet,'newpet');
    
    res.status(201).json({ status: 1, msg: "Pet added successfully", data: newPet });

  } catch (error) {
    res.status(500).json({ status: 0, msg: "Server Error", error: error.message });
  }
};

// fetch pets
const fetchPet = async(req,res)=>{
  try{

    const pets = await PetModel.find()
      console.log(pets);
    return res.status(200).json({pets})
  }
  catch(error){
    console.error("Error fetching pets:", error);
    res.status(500).json({ status: 0, msg: "Server Error", error: error.message });
  }
}

//fetch pet by id
const fetchPetById = async(req,res)=>{
  const {id} = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid ID format" });
  }
  try{
    const pet = await PetModel.findById(id);
    if(!pet) return res.status(404).json({message: 'pet not found'});
    res.status(200).json(pet);
  }
  catch(error){
    res.status(500).json({message:error.message});
  }
}
// by category
// Fetch pets by category
const fetchPetByCategory = async (req, res) => {
  const { category } = req.query;

  if (!category) {
    return res.status(400).json({ message: "Category is required" });
  }

  try {
    // Find pets by category
    const pets = await PetModel.find({ category });
    if (pets.length === 0) {
      return res.status(404).json({ message: "No pets found in this category" });
    }
    res.status(200).json(pets);
  } catch (error) {
    console.error("Error fetching pets by category:", error);
    res.status(500).json({ status: 0, msg: "Server Error", error: error.message });
  }
};


// edit
const updatePet = async (req, res) => {
  const { id } = req.params;
  const updates = req.body;
  try {
    const updatedPet = await PetModel.findByIdAndUpdate(id, updates, { new: true });
    if (!updatedPet) return res.status(404).json({ message: "Pet not found" });
    res.status(200).json(updatedPet);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


module.exports = { AdminAddPet, fetchPet, fetchPetById, fetchPetByCategory, updatePet};
