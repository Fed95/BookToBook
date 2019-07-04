'use strict';

var url = require('url');

var utils = require('../utils/writer.js');

var Users = require('./UsersService');


module.exports.postUser = function postUser(req, res, next) {

    console.log(req.swagger.params["user_mail"])

    var user_mail = req.swagger.params["user_mail"].value;
    var password = req.swagger.params["password"].value;
    var username = req.swagger.params["username"].value;
    var user_shipping_address = req.swagger.params["user_shipping_address"].value;

    Users.postUser(user_mail, password, username, user_shipping_address)
        .then(function (response) {
            console.log('logout response: ', response)
            console.log("Login andato a buon fine");
            req.session.loggedIn = true;
            req.session.user_mail = user_mail;
            utils.writeJson(res, response);
        }).catch(function (response) {
        utils.writeJson(res, response, 409);
    });
};

module.exports.postUserLogin = function postUserLogin(req, res, next) {
    console.log("hello from Users.js - postUserLogin");

    var user_mail = req.swagger.params["user_mail"].value;
    var password = req.swagger.params["password"].value;

    Users.postUserLogin(user_mail, password)
        .then(function (response) {
            if (response.length > 0) {
                console.log("Login andato a buon fine");
                req.session.loggedIn = true;
                req.session.user_mail = user_mail;
                utils.writeJson(res, response, 200);
            } else {
                console.log("Login fallito");
                utils.writeJson(res, "Username or Password are incorrect.", 404);
            }
            //res.end();
        }).catch(function (response) {
        utils.writeJson(res, response);
    });
};

module.exports.postUserLogout = function postUserLogout(req, res, next) {

    //todo: handle in service

    console.log('cookies deleted. session = ', req.session)
    req.session = null
    res.end()
    console.log('cookies deleted. session = ', req.session)
};


module.exports.getUserCheck = function getUserCheck(req, res, next) {

    //todo: check this

    console.log('executing getUserCheck')

    var user = {
        mail: req.session.user_mail
    };
    if(user){
        utils.writeJson(res, user);
    }else{
        tils.writeJson(res, "Session not found", 404);
    }



};
