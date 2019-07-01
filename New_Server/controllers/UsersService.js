'use strict';
var pg = require("../index.js");
var knex = pg.knex;

exports.getUserUserID = function(args, res, next) {
  /**
   * parameters expected in the args:
  * userID (String)
  **/
    var examples = {};
    if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.postUser = function(args, res, next) {
  /**
   * parameters expected in the args:
  * contentType (String)
  * body (User)
  **/
  console.log("hello from UsersService.js - postUser");
  // no response value expected for this operation
  res.end();
}


exports.postUserLogin = function (args, res, next) {
    /**
     * parameters expected in the args:
     * contentType (String)
     * body (Login)
     **/
    console.log(args.swagger.params["user_mail"].value);

    return new Promise(function (resolve, reject) {

        var userIdReq = args.swagger.params["user_mail"].value;
        var passwordReq = args.swagger.params["password"].value;
        console.log('userIdReq = ', userIdReq)
        console.log('passwordReq = ', passwordReq)

        //return new Promise(function (resolve, reject) {

        //console.log('Starting auth procedure: req.session = ' + JSON.stringify(req.session))

        let myQuery = knex('new_schema.users AS u')
            .where(
                {
                    user_mail: userIdReq,
                    password: passwordReq
                })
            .select('password')
            .then(result => {
                console.log(result);
                resolve(result);
            })

    });

    /*return new Promise(function (resolve, reject) {

        console.log('Starting auth procedure: req.session = ' + JSON.stringify(req.session))

        knex('new_schema.users')
            .where('user_mail', '=', userIdReq)
            .select('password')
            .then(result => {
                //console.log(result[0]);

                if (!result || !result[0]) {  // not found!
                    // report invalid username
                    reject(new Error('Username or password are incorrect'));
                }
                var pass = result[0].password;
                if (passwordReq === pass) {
                    // login cookie
                    //req.session.loggedIn = true;
                    /*req.session.save(() => {
                        console.log(req.session);

                    });*/
                    //res.cookie('cookie', '2');
                    //session.save();
                    //res.end.bind(res);
                    /*console.log("Logged in");
                    console.log('Done with auth procedure: req.session = ' + JSON.stringify(req.session));
                    //res.end();
                    resolve(result)*/
                /*} else {
                    // failed login
                    reject(new Error('Username or password are incorrect'));

                }
            })
            .catch(function (error) {
                reject(error)
            });
        console.log("Next");
    })*/
};


exports.postUserLogout = function(args, res, next) {
  /**
   * parameters expected in the args:
  **/
  // no response value expected for this operation
  res.end();
};

