const express = require("express");
const router = express.Router();
const { createItem, getItem, deleteItem, updateItem } = require("../controller/index");

router.post("/items", createItem);
router.get("/items", getItem);
router.put("/items/:id", updateItem);  
router.delete("/items/:id", deleteItem);   

module.exports = router;
