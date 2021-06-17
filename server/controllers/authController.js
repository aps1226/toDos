const cookieParser = require('cookie-parser');

module.exports = {

  isAuthorized(req,res,next){
    const userName = req.body.user;
    const passWord = req.body.pass;
    if(userName === 'codesmith' && passWord === 'ilovetesting'){
      res.cookie('token','admin');
      res.redirect('/secret');
    }
    else res.send('Unsuccessful login attempt.');
    return next();
  },

  isLoggedIn(req,res,next){
    console.log(req.cookies.token);
    if(req.cookies.token){
      return next();
    }
    else{
      res.send('You must be signed in to view this page.');
    }
    return next();
  },


};
