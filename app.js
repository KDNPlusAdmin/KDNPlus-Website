/* eslint-disable no-redeclare */
/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-require-imports */
const express = require('express');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON data
app.use(express.json());

// Serve static files (HTML, CSS, JS)
app.use(express.static('public'));

// Import Routes
const authRoutes = require('./routes/auth');
const planRoutes = require('./routes/plans');
const movieRoutes = require('./routes/movies');

// Use Routes
app.use('/auth', authRoutes);  
app.use('/plans', planRoutes);
app.use('/movies', movieRoutes);

// Root endpoint


// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
