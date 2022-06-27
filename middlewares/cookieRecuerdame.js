//esta es la función de la cookie que recuerda al usuario //
const User = require('../models/User')

function cookieRecuerdame(req, res, next){

    if(req.cookies.recuerdame != undefined && req.session.userLogged == undefined ){
        
        let userToLogin = User.findByField("id", req.cookies.recuerdame);

        req.session.userLogged = userToLogin
    }

    next()
    
}

module.exports=cookieRecuerdame;