const express = require('express');
const router = express.Router();
const checkRol = require('../middleware/rol')
const authMiddleware = require('../middleware/session');
const customHeader = require('../middleware/customHeader');
const { validatorCreateItem, validatorGetItem} = require('../validators/tracks');
const { getItems, getItem, createItem, updateItem, deleteItem } = require('../controllers/tracks'); 

//Route list Items
router.get('/', authMiddleware, getItems);

//Route detail of item
router.get('/:id', authMiddleware, validatorGetItem, getItem);

//Route Create item
router.post('/', authMiddleware, checkRol(['admin']), validatorCreateItem, createItem);

//Route Update item
router.put('/:id', authMiddleware, validatorGetItem, validatorCreateItem, updateItem);

//Delete Item
router.delete('/:id', authMiddleware, validatorGetItem, deleteItem);


module.exports = router;