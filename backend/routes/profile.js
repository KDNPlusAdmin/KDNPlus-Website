/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable no-undef */
const express = require('express');
const { getUserByEmail, createUser } = require('../models/userModel');
const router = express.Router();

// Update user profile
router.post('/update', async (req, res) => {
    const { email, username, firstName, lastName } = req.body;

    const user = await getUserByEmail(email);
    if (!user.Item) {
        return res.status(404).send('User not found');
    }

    const updatedUser = {
        ...user.Item,
        username,
        firstName,
        lastName
    };

    try {
        await createUser(updatedUser);
        res.status(200).send('Profile updated successfully');
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
        res.status(500).send('Error updating profile');
    }
});

module.exports = router;
