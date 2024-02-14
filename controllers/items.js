// Import the v4 function from the "uuid" library
const { v4 } = require("uuid");

// Initialize an empty array to store item data
let itemData = [];

// Get all items
const getItem = (req, res) => {
  res.json(itemData);
};

// Add a new item
const addItem = (req, res) => {
  const item = req.body;
  itemData.push({ ...item, id: v4() });
  res.send(`Item "${item.name}" has been added successfully.`);
};

// Get an item by its ID
const getItemId = (req, res) => {
  const { id } = req.params;
  const itemFound = itemData.find((item) => item.id === id);
  console.log(itemFound); // Log the found item
  res.send(itemFound);
};

// Delete an item by its ID
const deleteItem = (req, res) => {
  const { id } = req.params;
  itemData = itemData.filter((item) => item.id !== id);
  console.log(itemData); // Log the updated item data
  res.send(`Item with ID ${id} has been deleted successfully.`);
};

// Update an item by its ID
const updateItem = (req, res) => {
  const { id } = req.params;
  const { name, toppings, price } = req.body;

  const item = itemData.find((item) => item.id === id);

  if (name) item.name = name;
  if (toppings) item.toppings = toppings;
  if (price) item.price = price;

  res.send(
    `Item with ID ${id} and name "${item.name}" has been updated successfully.`
  );
};

// Export the functions for use in other modules
module.exports = { getItem, addItem, getItemId, deleteItem, updateItem };
