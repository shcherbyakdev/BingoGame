const express = require('express');
const router = express.Router();
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const User = require('../models/user');



// Login
router.get('/login', function(req, res){
	res.render('login');
});
// Register
router.get('/register', function(req, res){
	res.render('register');
});

passport.use('signup',new LocalStrategy(
	function(username,password,done){
		
		User.getUserByUsername(username,function(err,user){
			if(err) throw err;
			if(user){
				return done(null,false,{message:'User with this name already exists!'})
			}
			else{
				let newUser = new User();
				newUser.username = username;
				newUser.password = newUser.generateHash(password);
				newUser.save(function(err) {
					if (err)
							throw err;
					return done(null, newUser);
			});
			}
		})
 }));


passport.use('login',new LocalStrategy(
  function(username,password,done) {
   User.getUserByUsername(username,function(err, user){
   	if(err) throw err;
   	if(!user){
   		return done(null, false, {message: 'Unknown User!'});
   	}

   	User.comparePassword(password, user.password, function(err, isMatch){
   		if(err) throw err;
   		if(isMatch){
   			return done(null, user);
   		} else {
   			return done(null, false, {message: 'Invalid password'});
   		}
   	});
   });
  }));

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.getUserById(id, function(err, user) {
    done(err, user);
  });
});

router.post('/login',
  passport.authenticate('login', {successRedirect:'/', failureRedirect:'/users/login',failureFlash: true}),
);
// Register User
router.post('/register', 
	passport.authenticate('signup', {successRedirect:'/', failureRedirect:'/users/register',failureFlash: true}),
);


module.exports = router;