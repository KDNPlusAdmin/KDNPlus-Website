/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable no-undef */
const express = require('express');
const { savePlan } = require('../models/planmodel');
const router = express.Router();

// Route to add a subscription plan
router.post('/add', async (req, res) => {
    const { planName, price, duration, planType } = req.body;

    // Basic validation
    if (!planName || !price || !duration || !planType) {
        return res.status(400).send('All fields are required, including planType');
    }

    const newPlan = {
        planName,
        price,
        duration,
        planType // Include planType in the item
    };

    try {
        await savePlan(newPlan);
        res.status(201).send('Plan added');
    } catch (error) {
        console.error('Error adding plan:', error);
        res.status(500).send('Error adding plan');
    }
});

module.exports = router;
