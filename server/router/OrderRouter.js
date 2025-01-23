

const express = require('express');
const router = express.Router();

const {placeOrder} = require('../control/OrderCtrl');
// const {getAllOrders} = require('../control/OrderCtrl')

router.post('/place', placeOrder);
// router.get('/vieworder', getAllOrders)


module.exports = router;
