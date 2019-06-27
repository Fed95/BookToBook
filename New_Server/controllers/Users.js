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
  //req.session.loggedIn = true;
    Users.postUserLogin(req.body, req.session, res)
        .then(function () {
          console.log("Ciao");
          req.session.loggedIn = true;
          //res.end();
        });

    res.end();

};

module.exports.postUserLogout = function postUserLogout (req, res, next) {
  Users.postUserLogout(req.swagger.params, res, next);
};
