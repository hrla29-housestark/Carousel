const express = require('express');
const router = express.Router();
const controller = require('./controller.js');

router.get(controller.get);

module.exports = router;
