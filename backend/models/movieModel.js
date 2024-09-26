/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable no-undef */
const { DynamoDBClient } = require('@aws-sdk/client-dynamodb');
const { DynamoDBDocumentClient, PutCommand } = require('@aws-sdk/lib-dynamodb');

// Initialize DynamoDB client
const ddbClient = new DynamoDBClient({ region: process.env.AWS_REGION });
const ddbDocClient = DynamoDBDocumentClient.from(ddbClient);

const moviesTableName = 'Movies';

// Function to add a movie to the DynamoDB table
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

module.exports = { addMovie };
