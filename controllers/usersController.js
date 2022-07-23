const path = require('path');
const { validationResult } = require('express-validator');
const db = require('../src/database/models');
const bcrypt = require("bcryptjs");
const session = require('express-session');

const Users = db.User;

const usersController = {

    login: (req, res) => {
        res.render("logIn")
    },

    loginProcess: (req, res) => {

         // 1. busca el usuario //
        let userToLogin = Users.findOne({
            where:{
                email: req.body.email
            }
         // 2. hace todo el proceso de login //
        }).then((user)=>{
            userToLogin=user.dataValues

            let check = bcrypt.compareSync(req.body.password, userToLogin.password)

            if(check){

                delete userToLogin.password

                // Aqui se está creando la cookie con la información del usuario. Dura 2 min //
                if(req.body.recuerdame != undefined){
                    res.cookie('recuerdame',userToLogin.id,{ maxAge: 60000*2})
                }

                req.session.userLogged = userToLogin
                res.locals.user = req.session.userLogged
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

        })
        
    },

    register: (req,res)=>{
        res.render('signUp')
    },
    storeUser: (req,res)=>{


        // 1. Validaciones de formulario de registro //
        const validations = validationResult(req);
        
        let oldData = {...req.body}

        if(validations.errors.length > 0){
            return res.render('signUp' ,{
                errors:validations.mapped(),
                old:oldData
            })
        }

        // 2. Ejecución del registro //

        let userData =  req.body;
        let file = req.files; 
        let encryptedPass = bcrypt.hashSync(userData.password, 10);
        let image
        
        console.log({userData,file,encryptedPass});

        if(file.length>0){
            image = file[0].filename
        }
        else{
            image = "dafaultProfile.png"
        }

        let newUser={
            ...userData,
            password: encryptedPass,
            profileImage: image,
            admin: 0,
            countryId:1
        }

        Users.create(newUser)

        // 3. redirección una vez queda guardado en DB //
        .then((user)=>{req.session.userLogged = newUser})
        .then((user)=>{res.redirect('profile')})
        .then((user)=>{console.log("este es el nuevo usuario",newUser)})
    },

    profile: (req,res)=>{
        res.render('profile', {user: req.session.userLogged})
    },
    edit: (req,res)=>{
        res.render('profileEdit', {user: req.session.userLogged})
    },
    storeEdition: async (req,res)=>{
        let body = req.body
        // new Promise(User.edit(req.params.id, req.body))
       let userEdited = await User.edit(req.params.id, req.body)
       console.log(userEdited);
        // No podemos lograr que la cookie siga en pie, al cambiar el usuario nos deslogea.
        //res.cookie('recuerdame',userEdited.id,{ maxAge: 60000*2})

               
                    session.userLogged = userEdited;
                    console.log(req.session.userLogged);

                    res.redirect('/users/profile')

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



    },
    logout: (req,res)=>{

        req.session.destroy();
        return res.redirect('/');
    }
};

module.exports = usersController;