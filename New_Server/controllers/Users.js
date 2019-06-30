'use strict';

var url = require('url');

var utils = require('../utils/writer.js');

var Users = require('./UsersService');


module.exports.getUserUserID = function getUserUserID(req, res, next) {
    Users.getUserUserID(req.swagger.params, res, next);
};

module.exports.postUser = function postUser(req, res, next) {
    console.log("hello from Users.js - postUser");
    Users.postUser(req.swagger.params, res, next);
};

module.exports.postUserLogin = function postUserLogin(req, res, next) {
    console.log("hello from Users.js - postUserLogin");

    Users.postUserLogin(req.body, req, res, next)
        .then(function (response) {
            console.log("Finito")
            //console.log(req)
            req.session.loggedIn = true;
            //utils.writeJson(res, response);
            //res.end();
        }).catch(function (response) {
        console.log("Sbagliato")
        //utils.writeJson(res, response);
    });
};

module.exports.postUserLogout = function postUserLogout(req, res, next) {
    console.log("post Logout")
    Users.postUserLogout(req.swagger.params, res, next);
};
