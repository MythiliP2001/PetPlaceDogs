
const mongoose= require('mongoose')

// for user appointment
const appointmentSchema = new mongoose.Schema({
    pet: { type: String, required: true },
    interestedIn: [String],
    date: { type: Date, required: true },
    time: { type: String, required: true },
    preference: { type: String, required: true },

  });



  const Appointment = new mongoose.model("Appointment", appointmentSchema);



  module.exports =   Appointment;