/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable no-undef */
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { getUserByEmail, saveSubscriber } = require('../models/userModel'); // Ensure both functions are imported
const router = express.Router();

// User login route
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    // Basic validation
    if (!email || !password) {
        return res.status(400).send('Email and password are required');
    }

    try {
        // Get user from DynamoDB
        const user = await getUserByEmail(email);
        if (!user) {
            return res.status(400).send('User not found');
        }

        // Compare password
        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            return res.status(401).send('Invalid credentials');
        }

        // Generate JWT token
        const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.status(200).json({ token });
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).send('Login failed');
    }
});

// Route to handle pre-order
router.post('/preorder', async (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).json({ success: false, message: 'Email is required' });
    }

    try {
        // Save pre-order details
        await saveSubscriber(email);
        res.status(201).json({ success: true });
    } catch (error) {
        console.error('Error creating pre-order:', error);
        res.status(500).json({ success: false, message: 'Pre-order failed' });
    }
});

module.exports = router;
