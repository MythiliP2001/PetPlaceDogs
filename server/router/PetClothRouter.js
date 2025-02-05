const express = require('express');
const { getPetClothes, addPetCloth, deletePetCloth, editPetCloth } = require('../control/PetClothCtrl');
const upload = require('../multerfiles/userupload');

const router = express.Router();

// Route to get all pet clothes
router.get('/getcloth', getPetClothes);

// Route to add a new pet cloth
router.post('/addcloth', upload.single('image') , addPetCloth);


// Route to delete a pet cloth
router.delete('/deleteproduct/:id', deletePetCloth);
router.put('/updateproduct/:id', upload.single('image'), editPetCloth)
module.exports = router;
