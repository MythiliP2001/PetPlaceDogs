
const express = require('express');
const appointment= express.Router();



const {createAppointment} = require('../control/AppointmentCtrl')





appointment.route('/appointment').post(createAppointment)




module.exports = appointment;