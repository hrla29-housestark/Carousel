const express = require('express');
const router = express.Router();
const controller = require('./controller.js');

router.route('/products').get(controller.get);

router.route('/products/:productID').get(controller.getOne);

module.exports = router;
