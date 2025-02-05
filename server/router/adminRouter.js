const express = require('express');
const ProductCtrl = require('../control/AdminCtrl');
const upload = require('../multerfiles/userupload');
const { AdminAddPet, fetchPet, fetchPetById, fetchPetByCategory, updatePet, deletePet } = require('../control/AdminCtrl');

const adminRouter = express.Router();

// Add new pet route
adminRouter.post('/addpet', upload.single('image'), AdminAddPet);

// Fetch all pets
adminRouter.get('/pets', ProductCtrl.fetchPet);

// Fetch pet by ID
adminRouter.get('/pets/:id', fetchPetById);

// Fetch pets by category
adminRouter.get('/pets/category', fetchPetByCategory);

// Update pet details
adminRouter.put('/pets/:id', updatePet);

// Delete pet by ID
adminRouter.delete('/pets/:id', deletePet);

module.exports = adminRouter;
