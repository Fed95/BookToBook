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

exports.postUser = function(mail, password) {
  /**
   * parameters expected in the args:
  * contentType (String)
  * body (User)
  **/
  console.log("---------------executing postUser-----------------------------");
    console.log("user mail and pw: ", mail, password)
    console.log("------------------------------------------------------------");

    return new Promise(function (resolve, reject) {


        //return new Promise(function (resolve, reject) {

        //console.log('Starting auth procedure: req.session = ' + JSON.stringify(req.session))

        let myQuery = knex('new_schema.users AS u')
            .where(
                {
                    user_mail: userIdReq,
                    password: passwordReq
                })
            .select('user_mail')
            .then(result => {
                console.log(result);
                resolve(result);
            })
    });
}


exports.postUserLogin = function (mail, password) {
    /**
     * parameters expected in the args:
     * contentType (String)
     * body (Login)
     **/

    console.log("---------------executing postUserLogin----------------------");
    console.log("user mail: ", mail)
    console.log("------------------------------------------------------------");

    return new Promise(function (resolve, reject) {

        console.log('userIdReq = ', mail)
        console.log('passwordReq = ', password)

        //return new Promise(function (resolve, reject) {

        //console.log('Starting auth procedure: req.session = ' + JSON.stringify(req.session))

        let myQuery = knex('new_schema.users AS u')
            .where(
                {
                    user_mail: mail,
                    password: password
                })
            .select('user_mail')
            .then(result => {
                console.log(result);
                resolve(result);
            })
    });
};


exports.postUserLogout = function(args, res, next) {
  /**
   * parameters expected in the args:
  **/
  // no response value expected for this operation
  res.end();
};

