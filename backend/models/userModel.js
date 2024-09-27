/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable no-undef */
const { DynamoDBClient } = require('@aws-sdk/client-dynamodb');
const { DynamoDBDocumentClient, PutCommand, GetCommand, ScanCommand } = require('@aws-sdk/lib-dynamodb');

// Initialize DynamoDB client
const ddbClient = new DynamoDBClient({ region: process.env.AWS_REGION });
const ddbDocClient = DynamoDBDocumentClient.from(ddbClient);

// Table names
const usersTableName = 'Users'; // Table for users
const newsletterTableName = 'NewsletterSubscribers'; // Table for newsletter subscribers
const moviesTableName = 'Movies'; // Table for movies
const plansTableName = 'SubscriptionPlans'; // Table for subscription plans

// Function to save a subscriber to the newsletter table
const saveSubscriber = async (email) => {
    const params = {
        TableName: newsletterTableName,
        Item: { email },
    };

    try {
        await ddbDocClient.send(new PutCommand(params));
        console.log('Subscriber saved to DynamoDB');
    } catch (err) {
        console.error('Error saving subscriber:', err);
        throw new Error('Could not save subscriber');
    }
};

// Function to get user by email from the users table
const getUserByEmail = async (email) => {
    const params = {
        TableName: usersTableName,
        Key: { email },
    };

    try {
        const result = await ddbDocClient.send(new GetCommand(params));
        return result.Item;
    } catch (err) {
        console.error('Error getting user', err);
        throw new Error('Could not get user');
    }
};

// Function to add a movie to the movies table
const addMovie = async (movie) => {
    const params = {
        TableName: moviesTableName,
        Item: movie,
    };

    try {
        await ddbDocClient.send(new PutCommand(params));
        console.log('Movie added to DynamoDB');
    } catch (err) {
        console.error('Error adding movie:', err);
        throw new Error('Could not add movie');
    }
};

// Function to get all movies from the movies table
const getAllMovies = async () => {
    const params = {
        TableName: moviesTableName,
    };

    try {
        const result = await ddbDocClient.send(new ScanCommand(params));
        return result.Items;
    } catch (err) {
        console.error('Error getting movies:', err);
        throw new Error('Could not get movies');
    }
};

// Function to add a subscription plan to the subscription plans table
const addSubscriptionPlan = async (plan) => {
    const params = {
        TableName: plansTableName,
        Item: plan,
    };

    try {
        await ddbDocClient.send(new PutCommand(params));
        console.log('Subscription plan added to DynamoDB');
    } catch (err) {
        console.error('Error adding subscription plan:', err);
        throw new Error('Could not add subscription plan');
    }
};

// Function to get all subscription plans from the subscription plans table
const getAllPlans = async () => {
    const params = {
        TableName: plansTableName,
    };

    try {
        const result = await ddbDocClient.send(new ScanCommand(params));
        return result.Items;
    } catch (err) {
        console.error('Error getting subscription plans:', err);
        throw new Error('Could not get subscription plans');
    }
};

// Export the functions
module.exports = {
    saveSubscriber,
    getUserByEmail,
    addMovie,
    getAllMovies,
    addSubscriptionPlan,
    getAllPlans
};
