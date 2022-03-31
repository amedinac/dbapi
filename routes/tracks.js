const express = require('express');
const router = express.Router();
const customHeader = require('../middleware/customHeader');
const { validatorCreateItem } = require('../validators/tracks');
const { getItems, createItem } = require('../controllers/tracks'); 

router.get('/', getItems);
router.post('/', validatorCreateItem, createItem);

module.exports = router;