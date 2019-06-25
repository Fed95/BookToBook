'use strict';

var url = require('url');


var Users = require('./UsersService');


module.exports.getUserUserID = function getUserUserID (req, res, next) {
  Users.getUserUserID(req.swagger.params, res, next);
};

module.exports.postUser = function postUser (req, res, next) {
  console.log("hello from Users.js - postUser");
  Users.postUser(req.swagger.params, res, next);
};

module.exports.postUserLogin = function postUserLogin (req, res, next) {
  console.log("hello from Users.js - postUserLogin");
  let insertedPassword = req.body.Password;
  console.log(req.body.UserId);
  console.log(req.body.Password);
  req.session.loggedin = true;
  console.log("Logged in")
  /*if (insertedPassword === Users.postUserLogin(req.swagger.params, res, next)){
    if(!req.session.loggedIn){
      req.session.loggedIn = true;
    }
  }*/

};

module.exports.postUserLogout = function postUserLogout (req, res, next) {
  Users.postUserLogout(req.swagger.params, res, next);
};
