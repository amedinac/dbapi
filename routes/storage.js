const express = require('express');
const router = express.Router();
const uploadMiddleware = require('../utils/handleStorage');
const { getItems, getItem, updateItem, deleteItem ,createItem } = require('../controllers/storage');
const { validatorGetItem } = require('../validators/storage');


//List Items
router.get('/', getItems)
//Detail Item
router.get('/:id', validatorGetItem, getItem)
//Delete Item
router.delete('/:id', validatorGetItem, deleteItem)
//Create Item
router.post('/', uploadMiddleware.single('myfile'), createItem)

module.exports = router;