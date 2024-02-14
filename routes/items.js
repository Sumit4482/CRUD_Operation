// Importing required libraries
const express = require("express");
const router = express.Router();

// Import controller functions
const {
  getItem,
  addItem,
  getItemId,
  deleteItem,
  updateItem,
} = require("../controllers/items");

// Creating Routes
router.get("/", getItem); // Get all items
router.post("/", addItem); // Add a new item
router.get("/:id", getItemId); // Get item by ID
router.delete("/:id", deleteItem); // Delete item by ID
router.put("/:id", updateItem); // Update item by ID

module.exports = router;
