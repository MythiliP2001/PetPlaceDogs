

const Appointment = require('../model/AppointmentModel')
// const nodemailer = require('nodemailer');


// appointment
const createAppointment = async (req, res) => {
    try {
      const { pet, interestedIn, date, time, preference } = req.body;

      console.log("Incoming appointment data:", req.body);
      console.log("Appointment details:", { pet, interestedIn, date, time, preference });
      
      const otp = Math.floor(100000 + Math.random() * 900000);
      // Create a new appointment
      const newAppointment = new Appointment({
        pet,
        interestedIn,
        date,
        time,
        preference,
      });
      await newAppointment.save();


      res.status(201).json({ message: 'Appointment booked successfully!' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Failed to book appointment' });
    }
  };







module.exports = {createAppointment};
