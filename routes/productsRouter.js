const express = require("express");
const router = express.Router();
const productController = require("../controllers/productsController");

router.get('/:id', productController.productDetail)



module.exports = router;