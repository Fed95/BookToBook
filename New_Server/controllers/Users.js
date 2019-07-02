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

    var mail = args.swagger.params["user_mail"].value;
    var password = args.swagger.params["password"].value;

    Users.postUserLogin(mail, password)
        .then(function (response) {
            if (response.length > 0) {
                console.log("Login andato a buon fine");
                req.session.loggedIn = true;
                utils.writeJson(res, response, 200);
            } else {
                console.log("Login fallito")
                utils.writeJson(res, "Username or Password are incorrect.", 404);
            }
            //res.end();
        }).catch(function (response) {
        console.log("Sbagliato")
        utils.writeJson(res, response);
    });
};

module.exports.postUserLogout = function postUserLogout(req, res, next) {
    console.log("post Logout")
    Users.postUserLogout(req.swagger.params, res, next);
};
