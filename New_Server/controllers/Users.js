'use strict';

var url = require('url');

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
  console.log("hello from Users.js - postUserLogin");
    //res.cookie('cookie', '2');

    //req.session.loggedIn = true;
     Users.postUserLogin(req.body, req.session, res, next)
        .then(function (response) {
            console.log("Response: " + JSON.stringify(response));
          console.log("Ciao");
          //req.session.loggedIn = true;
              /*req.session.save(() => {
                  console.log(req.session);

              });*/
          res.end.bind(res);
        }).then(function () {
            console.log("loggedIn before: " + req.session.loggedIn);
            //req.session.loggedIn = true;
            //res.end();
        //req.session.save();
        //res.end();
        /*req.session.save(() => {
            console.log("EHI")
            console.log(req.session);
            return res.end();

        });*/
            console.log("Cookie: " + JSON.stringify(req.cookies))
         res.send(req.session)

            //req.session.save();
        //res.end();
        console.log("loggedIn: " + req.session.loggedIn)
    });

    console.log("Res sent")
    //res.end();
};

module.exports.postUserLogout = function postUserLogout (req, res, next) {
  Users.postUserLogout(req.swagger.params, res, next);
};
