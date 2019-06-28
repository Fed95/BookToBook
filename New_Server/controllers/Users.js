'use strict';

var url = require('url');
var writer = require('../utils/writer')
var pg = require("../index.js");
var knex = pg.knex;



var Users = require('./UsersService');


module.exports.getUserUserID = function getUserUserID (req, res, next) {
  Users.getUserUserID(req.swagger.params, res, next);
};

module.exports.postUser = function postUser (req, res, next) {
  console.log("hello from Users.js - postUser");
  Users.postUser(req.swagger.params, res, next);
};

module.exports.postUserLogin = function postUserLogin (req, res, next) {



     Users.postUserLogin(req.body, req, res, next)
};

module.exports.postUserLogout = function postUserLogout (req, res, next) {
  Users.postUserLogout(req.swagger.params, res, next);
};
