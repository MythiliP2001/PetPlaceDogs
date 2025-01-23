const express=require('express')
const upload =require('../multerfiles/userupload')
const user=express.Router()
const {SignUp, SignIn, } = require("../control/userCtrl")





user.route('/signup').post(upload.single('images'), SignUp)
user.route('/signin').post(SignIn)









module.exports = user