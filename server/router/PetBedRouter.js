// routes/petBedRoutes.js

const express = require('express');
const upload = require('../multerfiles/userupload')

const { getPetBeds, addPetBed, deletePetBed, editPetBed } = require('../control/PetBedCtrl');
const router = express.Router();

// Get all pet beds
router.get('/getbeds', getPetBeds);

// Add a new pet bed
router.post('/addbed', upload.single('image'), addPetBed);
router.delete('/deleteproduct/:id', deletePetBed);
router.put('/updateproduct/:id', upload.single('image'), editPetBed)
module.exports = router;
