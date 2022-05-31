const express = require("express");
const router = express.Router();
const productController = require("../controllers/productsController");
const multer = require('multer')
const path = require('path');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/images')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9) + path.extname(file.originalname)
      cb(null, file.fieldname + '-' + uniqueSuffix)
    }
  })
  
  const upload = multer({ storage: storage })



router.get('/', productController.productsList)
router.get('/create', productController.productRegister)
router.post('/create', upload.any(), productController.productCreate)
router.get('/:id', productController.productDetail)
router.get('/edit/:id/', productController.edit)


module.exports = router;