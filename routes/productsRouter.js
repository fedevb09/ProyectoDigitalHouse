const express = require("express");
const router = express.Router();
const productController = require("../controllers/productsController");

router.get('/:id', productController.productDetail)
router.get('/', productController.productsList)


module.exports = router;