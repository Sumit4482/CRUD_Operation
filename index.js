/**
 * This project aims to perform basic CRUD operations using Node.js and Express.js.
 */

// Importing Required Libraries
const express = require('express');
const bodyparser = require('body-parser');
const app = express();
const PORT = 3000;

// Import item routes
const itemRoutes = require('./routes/items');

// Middleware for parsing JSON data
app.use(bodyparser.json());

// Mount item routes under '/items' path
app.use('/items', itemRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});
