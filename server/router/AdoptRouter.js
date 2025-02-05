
const express = require('express')

const adoptCtrl= require('../control/AdoptCtrl')
const upload = require('../multerfiles/userupload')



const router = express.Router();


router.post('/addadoptpet', upload.single('image'), adoptCtrl.addAdoptPet); // Adding a new adoptable pet
router.get('/fetchadoptablepets', adoptCtrl.fetchAdoptablePets); // Fetching all adoptable pets
router.get('/fetchadoptablepet/:id', adoptCtrl.fetchAdoptablePetById); // Fetching a specific adoptable pet by ID
router.put('/updateadoptablepet/:id', adoptCtrl.updateAdoptablePet); // Updating an adoptable pet
router.delete('/deleteadoptablepet/:id', adoptCtrl.deleteAdoptablePet); // Deleting an adoptable pet

module.exports = router;