
const express=require('express')
const ProductCtrl= require('../control/AdminCtrl')
const upload = require('../multerfiles/userupload')
const {AdminAddPet, fetchPet, fetchPetById,fetchPetByCategory, updatePet} = require('../control/AdminCtrl')

const adminRouter = express.Router()

const adminEditRouter = express.Router();


adminRouter.post('/addpet',upload.single('image'), AdminAddPet)
adminRouter.get('/pets', ProductCtrl.fetchPet)

// editadmin
adminEditRouter.get('/fetchpet', fetchPet);
adminEditRouter.get('/fetchpet/:id', fetchPetById);
adminEditRouter.put('/fetchpet/:id', updatePet);
adminEditRouter.get('/fetchpet/category', fetchPetByCategory)

module.exports= adminRouter, adminEditRouter;