/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-unused-vars */
const express = require('express');
const { createTransaction, getTransactionsByUserId } = require('../models/transactionModel');
const router = express.Router();

// Create a new transaction
router.post('/create', async (req, res) => {
    const { userId, amount, transactionDate, plan, paymentType, status } = req.body;

    const newTransaction = {
        transactionId: Date.now().toString(),
        userId,
        amount,
        transactionDate,
        plan,
        paymentType,
        status
    };

    try {
        await createTransaction(newTransaction);
        res.status(201).send('Transaction created successfully');
    } catch (error) {
        res.status(500).send('Error creating transaction');
    }
});

// Get transactions by user ID
router.get('/user/:userId', async (req, res) => {
    const { userId } = req.params;

    try {
        const result = await getTransactionsByUserId(userId);
        res.status(200).json(result.Items);
    } catch (error) {
        res.status(500).send('Error fetching transactions');
    }
});

module.exports = router;
