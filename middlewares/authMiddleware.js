function authtMiddleware(req, res, next){
    if(!req.session.userlogged){
      return res.redirect('/user/login');
    }
    next();
}

module.exports = authtMiddleware;