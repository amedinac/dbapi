const express = require('express');
const router = express.Router();
const { registerCtrl, loginCtrl } = require('../controllers/auth')
const {validatorRegister, validatorLogin} = require('../validators/auth');

router.post('/register', validatorRegister, registerCtrl );

router.post('/login', validatorLogin, loginCtrl );


module.exports = router;