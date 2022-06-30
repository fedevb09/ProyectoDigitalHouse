function guestMiddleware(req, res, next){
      if(req.session.userlogged){
        return res.redirect('/user/profile')
      }
      next();
}

module.exports = guestMiddleware;