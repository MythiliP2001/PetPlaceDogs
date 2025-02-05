const express = require('express');
const cors = require('cors');
const  multer = require('multer');
const app = express();
const PORT = 5000;
require('dotenv').config();
const upload = require('./multerfiles/userupload')

const path = require('path');




// cors option
const corsOptions = {
  origin: "http://localhost:5173", // Allow frontend to access the server
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions));




const jwtSecret = process.env.JWT_SECRET;


app.use(cors())
app.use(express.urlencoded({extends:true}))
app.use(express.json())

app.use('/uploads', express.static(path.join(__dirname,  'multerfiles/uploads')));
 

const mongoose=require('mongoose')

main().catch(err=>console.log(err))
async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/petplace_db').then(()=>{
      console.log('dbconnected');
      
    })
    .then(()=>console.log('connected mongoDB'))
    .catch((error)=>{
      console.log(error);
      
    })
    console.log("mongodb connected")
}






const CartRouter = require('./router/CartRouter')
const adminRouter=require('./router/adminRouter')
const user=require('./router/userRouter')
const adminEditRouter= require('./router/adminRouter')
const appointmentRouter = require('./router/AppointmentRouter');
const boardingRouter = require('./router/BoardingRouter');
const petClothRouter = require('./router/PetClothRouter');
const orderRouter = require('./router/OrderRouter');
const viewRouter = require('./router/ProductRouter')
const petBedRouter = require('./router/PetBedRouter')
const petFoodRouter = require('./router/PetFoodRouter')
const petToyRouter = require('./router/PetToyRouter')
const adoptRouter = require('./router/AdoptRouter')



app.use('/cart',CartRouter)
app.use('/admin', adminRouter)
app.use('/UserRouter', user)
app.use('/editpet', adminEditRouter)
app.use('/appoint', appointmentRouter)
app.use('/boarding', boardingRouter)
app.use('/petcloth', petClothRouter)
app.use('/orders', orderRouter);
app.use('/adminview', viewRouter)
app.use('/petbed', petBedRouter)
app.use('/petfood',petFoodRouter)
app.use('/pettoy', petToyRouter)
app.use('/admin',adoptRouter)



app.get("/getbooking", (req, res) => {
  res.send("Pet Boarding API is running...");
});






app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
