const express = require('express');
const PetBed = require('../model/PetBedModel');
const router = express.Router();

// Get all pet beds
router.get('/getbeds', async (req, res) => {
  try {
    const beds = await PetBed.find();
    res.json(beds);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch pet beds' });
  }
});

// Add a new pet bed
router.post('/addbed', async (req, res) => {
  try {
    const newBed = new PetBed(req.body);
    await newBed.save();
    res.status(201).json(newBed);
  } catch (error) {
    res.status(400).json({ error: 'Failed to add pet bed' });
  }
});

module.exports = router;
