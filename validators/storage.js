const { check } = require('express-validator');
const { validateResult } = require('../utils/handleValidator');



const validatorGetItem = [
    check('id').exists().notEmpty(),
    (req, res, next) => {
        return validateResult(req, res, next);
    }
]

module.exports = { validatorGetItem };