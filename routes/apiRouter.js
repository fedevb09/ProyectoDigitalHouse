const express = require("express");
const router = express.Router();
const path = require('path');
const apiController = require('../controllers/apiController')

router.get('/list', apiController.list)
router.get('/products', apiController.products)
router.get('/product/:id', apiController.product)


module.exports = router;