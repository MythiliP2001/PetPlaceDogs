

const express = require('express');
const router = express.Router();


const {getAllOrders} = require('../control/ProductCtrl')

router.get('/vieworder', getAllOrders)


module.exports = router;