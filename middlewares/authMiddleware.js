function authtMiddleware(req, res, next){

  console.log(req.session);
    if(req.session && req.session.userLogged){
      
      next();
    }
  }

module.exports = authtMiddleware;