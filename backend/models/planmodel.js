/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable no-undef */
const { DynamoDBClient } = require('@aws-sdk/client-dynamodb');
const { DynamoDBDocumentClient, PutCommand } = require('@aws-sdk/lib-dynamodb');

// Initialize DynamoDB client
const ddbClient = new DynamoDBClient({ region: process.env.AWS_REGION });
const ddbDocClient = DynamoDBDocumentClient.from(ddbClient);

const tableName = 'SubscriptionPlans';

// Function to save a subscription plan
const savePlan = async (plan) => {
    const params = {
        TableName: tableName,
        Item: plan,
    };

    try {
        await ddbDocClient.send(new PutCommand(params));
        console.log('Plan added to DynamoDB');
    } catch (err) {
        console.error('Error adding plan:', err);
        throw new Error('Could not add plan');
    }
};

module.exports = { savePlan };
