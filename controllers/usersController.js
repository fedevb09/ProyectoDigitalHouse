const fs = require('fs');
const path = require('path');

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
        const newUserId = (users[users.length - 1].id) + 1
        let image;
console.log(req.files);

        if(req.files.length>0){
            image = req.files.filename
        }
        else{
            image = "/images/users/dafaultProfile.png"
        }

        const newUser = {
            id : newUserId,
            ...req.body,
            profileImage: image,
            category: "regular"
        }

        users.push(newUser)

        fs.writeFileSync(usersPath, JSON.stringify(users, null , " "));

        res.redirect('profile')
    },

    profile: (req,res)=>{
        res.render('profile')
    }
};

module.exports = usersController;