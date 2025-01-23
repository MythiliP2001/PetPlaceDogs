const mongoose= require('mongoose')

//  boarding-booking
  const bookingSchema = new mongoose.Schema({
    pet: { type: String, required: true },
    service: { type: String, required: true },
    days: { type: Number, required: true },
    total: { type: Number, required: true },
    date: { type: Date, default: Date.now },
  });
  
  const Booking =new mongoose.model("Booking", bookingSchema);

  

  module.exports =    Booking;