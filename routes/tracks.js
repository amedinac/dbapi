const express = require('express');
const router = express.Router();
const customHeader = require('../middleware/customHeader');
const { validatorCreateItem, validatorGetItem} = require('../validators/tracks');
const { getItems, getItem, createItem, updateItem, deleteItem } = require('../controllers/tracks'); 

//Route list Items
router.get('/', getItems);

//Route detail of item
router.get('/:id', validatorGetItem, getItem);

//Route Create item
router.post('/', validatorCreateItem, createItem);

//Route Update item
router.put('/:id', validatorGetItem, validatorCreateItem, updateItem);

//Delete Item
router.delete('/:id', validatorGetItem, deleteItem);


module.exports = router;