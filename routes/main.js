const express = require("express");
const router = express.Router();
const mainController = require("../controllers/mainController");

router.get("/", mainController.index);
router.get("/cart", mainController.cart);
router.get("/signUp", mainController.signUp);
router.get("/logIn", mainController.logIn);


module.exports = router
