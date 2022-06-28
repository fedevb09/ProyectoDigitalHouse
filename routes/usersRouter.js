const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersController");
const upload = require('../middlewares/usersMulterMiddleware')
const path = require('path');
const { productEdit } = require("../controllers/usersController");
const validations = require('../middlewares/registerValidation')
const usersValidations = require ('../middlewares/usersValidations')

router.get('/login', usersController.login)
router.post('/log',  usersController.loginProcess)
router.get('/register', usersController.register)
router.post('/register', upload.any(), usersValidations.isAccess ,validations, usersController.storeUser)
router.get('/profile', usersController.profile)

router.get('/edit/', usersController.edit)
router.put('/edit/:id/', usersController.storeEdition) 

router.get('/edit/password', usersController.editPassword)

// router.delete('/delete/:id', usersController.destroy); 



module.exports = router;