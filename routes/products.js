const express = require('express');
const ctrl = require('../controllers/products');
const ctrlWrapper = require('../utils/ctrlWrapper');
console.log('ctrl', ctrl);
const router = express.Router();

router.get('/', ctrlWrapper(ctrl.getAllProducts));

module.exports = router;
