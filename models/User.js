const fs = require('fs');
const path = require('path');
const bcrypt = require('bcryptjs')

const User = {
    // Declaración ruta relativa de la DB //
    filename: 'data/users.json',
    // Función interna, no utilizar//
    getData: function() {
        return JSON.parse(fs.readFileSync(this.filename, 'utf-8'));
    },
    // Función que genera un id aumentado en 1 para los nuevos usuarios//
    generateId: function(){
        let users = this.findAll();
        let lastUser = users.pop()
        return (lastUser.id+1)
    },
    // Función para traerse a todos los usuarios //
    // Ej de uso: findAll()//
    findAll: function() {
        return this.getData();
    },
    // Función que encuentra a un usuario brindandole un id, para utilizar codear findByPk(id)//
    // Ej de uso: findByPk(2)//
    findByPk: function(id) {
        let allUsers = this.findAll();
        let userFound = allUsers.find(user=> user.id === id);
        return userFound;
    },
    // Función que encuentra por campo, brindarle el valor del campo y el nombre del campo.//
    // Ej de uso: findByField(email, "nachoalquati@gmail.com")
    findByField: function(field, text) {
        let allUsers = this.findAll();
        let userFound = allUsers.find(user=> user[field] === text);
        return userFound;
    },
    // Función de guardado del nuevo usuario en la DB//
    create: function(userData,file){

    let allUsers = this.findAll()
    let encryptedPass = bcrypt.hashSync(userData.password, 10);
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
            password: encryptedPass,
            profileImage: image,
            category: "regular"
        }

    allUsers.push(newUser);
    fs.writeFileSync(this.filename, JSON.stringify(allUsers, null, " "));
    return newUser
    },
    // Función de eliminado de usuario, recibe un id//
    // Ej de uso: delete(2)//
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
// console.log(User.delete(6));

//console.log(User.findByField("email", "ivan@email.com"))