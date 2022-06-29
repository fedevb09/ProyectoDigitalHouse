const fs = require('fs');
const path = require('path');
const { validationResult } = require('express-validator')
const User = require('../models/User')
const bcrypt = require("bcryptjs")
const usersValidation = require('../middlewares/usersValidations')

const usersPath = path.join(__dirname, '../data/users.json');
const users = JSON.parse(fs.readFileSync(usersPath, 'utf-8'));

const usersController = {

    login: (req, res) => {
        res.render("logIn")
    },

    loginProcess: (req, res) => {

        let userToLogin = User.findByField("email", req.body.email)
        let check = bcrypt.compareSync(req.body.password, userToLogin.password)

        if(userToLogin && check){

            delete userToLogin.password

            // Aqui se está creando la cookie con la información del usuario. Dura 2 min //
            if(req.body.recuerdame != undefined){
                res.cookie('recuerdame',userToLogin.id,{ maxAge: 60000*2})
            }

            req.session.userLogged = userToLogin

            return res.redirect("profile")
            
        }else{

            let errors =  {
                email: {
                    msg: "Las credenciales son inválidas"
                },
                password: {
                    msg: "Las credenciales son inválidas"
                    }
            }

            return res.render("login", {errors:errors})
        }
        
    },

    register: (req,res)=>{
        res.render('signUp')
    },
    storeUser: (req,res)=>{
        // Validaciones de formulario de registro //
        const validations = validationResult(req);
        
        let oldData = {...req.body}

        if(validations.errors.length > 0){
            return res.render('signUp' ,{
                errors:validations.mapped(),
                old:oldData
            })
        }
        // -------------------------------- //

        
        // Hago uso de la función crear del modelo Users.js//
        User.create(req.body, req.files)
        res.redirect('profile')
    },

    profile: (req,res)=>{
        res.render('profile', {user: req.session.userLogged})
    },
    edit: (req,res)=>{
        res.render('profileEdit', {user: req.session.userLogged})
    },
    storeEdition: (req,res)=>{
        let body = req.body
        // new Promise(User.edit(req.params.id, req.body))
       let userEdited = User.edit(req.params.id, req.body)
       
        // No podemos lograr que la cookie siga en pie, al cambiar el usuario nos deslogea.
        //res.cookie('recuerdame',userEdited.id,{ maxAge: 60000*2})
      

               

                setTimeout(function(){
                    
                    let userToLogin = User.findByField("id", req.cookies.recuerdame);
                    req.session.userLogged = userToLogin
                    
                    res.redirect('/users/profile')
                }, 120)
                // res.redirect('/users/profile')
 

    },
    editPassword: (req,res)=>{
        res.render('editpassword', {user: req.session.userLogged})
    },
    newPasswordProcess: (req,res)=>{

        let userId = +req.params.id
        let userToEdit = User.findByPk(userId)

        let check = bcrypt.compareSync(req.body.password, userToEdit.password)

        if(check === true){

            User.editPassword(userId, req.body)
            return res.redirect('/users/login')
        }
        let errors = {password: {
            msg: "Las credenciales son inválidas"
        }}
        return res.render('editpassword',{errors:errors, user: req.session.userLogged})



    }
};

module.exports = usersController;