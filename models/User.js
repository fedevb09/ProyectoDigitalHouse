const fs = require('fs');
const path = require('path');

const User = {

    filename: 'data/users.json',
    getData: function() {
        return JSON.parse(fs.readFileSync(this.filename, 'utf-8'));
    },
    generateId: function(){
        let users = this.findAll();
        let lastUser = users.pop()
        return (lastUser.id+1)
    },
    findAll: function() {
        return this.getData();
    },
    findByPk: function(id) {
        let allUsers = this.findAll();
        let userFound = allUsers.find(user=> user.id === id);
        return userFound;
    },
    findByField: function(field, text) {
        let allUsers = this.findAll();
        let userFound = allUsers.find(user=> user[field] === text);
        return userFound;
    },
    create: function(userData,file){

    let allUsers = this.findAll()

    let image;

        if(file.length>0){
            image = file[0].filename
        }
        else{
            image = "/images/users/dafaultProfile.png"
        }

        const newUser = {
            id : this.generateId(),
            ...userData,
            profileImage: image,
            category: "regular"
        }

    allUsers.push(newUser);
    fs.writeFileSync(this.filename, JSON.stringify(allUsers, null, " "));
    return newUser
    },
    delete: function (id) {
        let userDeleted = this.findByPk(id)
        let allUsers =this.findAll();
        let finalUsers = allUsers.filter(user => user.id !== id)
        fs.writeFileSync(this.filename, JSON.stringify(finalUsers, null, " "));
        console.log("User deleted:")
        return {"email" :userDeleted.email,"id: " : userDeleted.id}
    }

}

module.exports= User;

//console.log(User.create({fullName:"Nacho", email:"nacho@nacho.com"}));
//console.log(User.generateId());
console.log(User.delete(6));