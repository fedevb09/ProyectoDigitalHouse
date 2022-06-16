const fs = require('fs');
const path = require('path');
const { validationResult } = require('express-validator')
const User = require('../models/User')

const usersPath = path.join(__dirname, '../data/users.json');
const users = JSON.parse(fs.readFileSync(usersPath, 'utf-8'));

const usersController = {

    login: (req, res) => {
        res.render("logIn")
    },

    register: (req,res)=>{
        res.render('signUp')
    },
    storeUser: (req,res)=>{
        const validations = validationResult(req);
        
        let oldData = {...req.body}
        console.log(oldData.fullName);
        if(validations.errors.length > 0){
            return res.render('signUp' ,{
                errors:validations.mapped(),
                old:oldData
            })
        }

        User.create(req.body, req.files)
        res.redirect('profile')
    },

    profile: (req,res)=>{
        res.render('profile')
    }
};

module.exports = usersController;