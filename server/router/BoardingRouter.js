
const express = require('express');


const booking = express.Router();

const {createBooking, getAllBookings} = require('../control/BoardingCtrl')

booking.post('/createbooking', createBooking);


booking.get('/getbooking', getAllBookings);



module.exports =  booking;
