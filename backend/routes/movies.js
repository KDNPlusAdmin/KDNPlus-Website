/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable no-undef */
const express = require('express');
const { addMovie } = require('../models/movieModel'); // Ensure correct import of the model
const router = express.Router();

// Add a new movie
router.post('/add', async (req, res) => {
    const { movieId, title, genre, releaseYear } = req.body;

    // Check if all required fields are provided
    if (!movieId || !title || !genre || !releaseYear) {
        return res.status(400).send('All fields are required');
    }

    const newMovie = {
        movieId,
        title,
        genre,
        releaseYear
    };

    try {
        await addMovie(newMovie); // Save the movie to the database
        res.status(201).send('Movie added successfully');
    } catch (error) {
        console.error('Error adding movie:', error);
        res.status(500).send('Error adding movie');
    }
});

module.exports = router;
