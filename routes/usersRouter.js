const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersController");
const multer = require('multer')
const path = require('path');
const { productEdit } = require("../controllers/usersController");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/images/users')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9) + path.extname(file.originalname)
      cb(null, file.fieldname + '-' + uniqueSuffix)
    }
  })
  
  const upload = multer({ storage: storage })


router.get('/login', usersController.login)
router.get('/register', usersController.register)
router.post('/register', upload.any(), usersController.storeUser)
router.get('/profile', usersController.profile)
// router.get('/edit/:id/', usersController.edit)
// router.put('/edit/:id/', upload.any(), usersController.userEdit) 
// router.delete('/delete/:id', usersController.destroy); 



module.exports = router;