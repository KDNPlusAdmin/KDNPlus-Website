/* eslint-disable no-undef */
// eslint-disable-next-line @typescript-eslint/no-require-imports
const { DynamoDBClient } = require('@aws-sdk/client-dynamodb');
// eslint-disable-next-line @typescript-eslint/no-require-imports
const { DynamoDBDocumentClient, PutCommand, QueryCommand } = require('@aws-sdk/lib-dynamodb');

const ddbClient = new DynamoDBClient({ region: process.env.AWS_REGION });
const ddbDocClient = DynamoDBDocumentClient.from(ddbClient);

const tableName = 'Transactions';

// Create a new transaction
const createTransaction = async (transaction) => {
    const params = {
        TableName: tableName,
        Item: transaction,
    };

    try {
        await ddbDocClient.send(new PutCommand(params));
        console.log('Transaction created successfully');
    } catch (err) {
        console.error('Error creating transaction', err);
        throw new Error('Could not create transaction');
    }
};

// Get transactions by userId
const getTransactionsByUserId = async (userId) => {
    const params = {
        TableName: tableName,
        IndexName: 'userId-index',
        KeyConditionExpression: 'userId = :userId',
        ExpressionAttributeValues: {
            ':userId': userId,
        },
    };

    try {
        const result = await ddbDocClient.send(new QueryCommand(params));
        return result.Items;
    } catch (err) {
        console.error('Error fetching transactions', err);
        throw new Error('Could not fetch transactions');
    }
};

module.exports = {
    createTransaction,
    getTransactionsByUserId,
};
