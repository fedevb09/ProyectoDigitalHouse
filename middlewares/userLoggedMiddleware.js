function userLoggedMiddleware(req, res, next){
    res.locals.islogged = false;

    if(req.session && req.session.userLogged){
        res.locals.isLogged = true;
    }
    next();
}

module.exports = userLoggedMiddleware;