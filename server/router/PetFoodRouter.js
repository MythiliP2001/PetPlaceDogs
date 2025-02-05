const express = require('express');
const upload = require('../multerfiles/userupload'); // Middleware for image upload
const { getPetFoods, addPetFood, deletePetFood, editPetFood } = require('../control/PetFoodCtrl');

const router = express.Router();

// Route to get all pet foods
router.get('/getfood', getPetFoods);

// Route to add a new pet food
router.post('/addfood', upload.single('image'), addPetFood);
router.delete('/deleteproduct/:id', deletePetFood)
router.put('/updateproduct/:id', upload.single('image'), editPetFood)
module.exports = router;
