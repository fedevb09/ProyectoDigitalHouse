const express = require("express");
const router = express.Router();
const path = require('path');
const apiController = require('../controllers/apiController')

router.get('/list', apiController.list)


module.exports = router;