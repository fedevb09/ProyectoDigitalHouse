const usersController = require('../controllers/usersController');
const express = require("express");
const router = express.Router();
const session = require("express-session");
const User = require('../models/User');


const usersValidations ={   
     isAccess:(req,res)=> {
      if (!req.session) {
        console.log(session)
         return res.redirect('/')          
      }else{
        return res.redirect('/users/login')
      } 
}
};
module.exports = usersValidations;