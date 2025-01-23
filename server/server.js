const express = require('express');
const cors = require('cors');
const  multer = require('multer');
const app = express();
const PORT = 5000;
require('dotenv').config();
const upload = require('./multerfiles/userupload')

const path = require('path');
const Image = require('./model/Image')



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

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
 

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

// image
app.post('/uploads', upload.single('image'), async (req, res) => {
  if (!req.file) {
    return res.status(400).send('No file uploaded');
  }
  console.log("Uploaded file:", req.file);

  try {
    // Save the image metadata to MongoDB
    const newImage = new Image({
      filename: req.file.filename,
      filepath: `/uploads/${req.file.filename}`, // The file path for serving the image
      
      originalName: req.file.originalname
    });
    console.log("Pet image:", pet.image); // Check if the correct filename is being passed

    await newImage.save(); // Save the image document to MongoDB

    res.status(200).json({
      message: 'Image uploaded successfully',
      image: newImage
    });
  } catch (err) {
    console.error(err);
    res.status(500).send('Error saving image to the database');
  }
});



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



app.get("/getbooking", (req, res) => {
  res.send("Pet Boarding API is running...");
});






app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
