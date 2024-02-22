const express = require('express');
const { createBooking } = require ('../controllers/bookingController');


const router = express.Router()


bookingRouter.post("/create", createBooking)

module.exports = router;