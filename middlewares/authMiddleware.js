function authtMiddleware(req, res, next){

  console.log(req.session);
    if(req.session && req.session.userLogged){
      
      next();
    }
    return res.redirect('/users/login');
  }

module.exports = authtMiddleware;