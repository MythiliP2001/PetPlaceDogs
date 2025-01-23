

//   boarding=booking
const Booking = require('../model/BoardingModel')
const createBooking = async (req, res) => {
    console.log("Incoming request:", req.body);
    try {
      const { pet, service, days, total } = req.body;
  
      if (!pet || !service || !days || !total) {
        return res.status(400).json({ message: "All fields are required" });
      }
  
      const newBooking = new Booking({
        pet,
        service,
        days,
        total,
      });
      await newBooking.save();
    res.status(201).json({ message: "Booking created successfully", booking: newBooking });
  } catch (error) {
    console.error("Error in createBooking:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};



// Fetch all bookings
const getAllBookings = async (req, res) => {
    try {
      const bookings = await Booking.find();
      res.status(200).json(bookings);
    } catch (error) {
      res.status(500).json({ message: "Server error", error: error.message });
    }
  };


module.exports = { createBooking, getAllBookings};
