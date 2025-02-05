const express = require('express');
const upload = require('../multerfiles/userupload');

const {
  getPetToys,
  addPetToy,
  deletePetToy,
} = require('../control/PetToyCtrl');

const router = express.Router();

// Routes
router.get('/gettoy', getPetToys); // GET all pet toys
router.post('/addtoy', upload.single('image'), addPetToy); // POST a new pet toy
router.delete('/deleteproduct/:id', deletePetToy); // DELETE a pet toy by ID

module.exports = router;
