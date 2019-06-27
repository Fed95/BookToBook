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

exports.postUserLogin = function(args, session, res, next) {
  /**
   * parameters expected in the args:
  * contentType (String)
  * body (Login)
  **/

  var userIdReq = args.UserId;
  var passwordReq = args.Password;

  console.log("hello from UsersService.js - postUserLogin");
  // no response value expected for this operation

  console.log(args);

  return new Promise(function (resolve, reject) {



    console.log(userIdReq);
    console.log(passwordReq);

    let myQuery =  knex('new_schema.users')
        .where({ user_mail: userIdReq })
        .select('password')
        .then(result => {
          console.log(result[0]);

          if (!result || !result[0])  {  // not found!
            // report invalid username
            return;
          }
          var pass = result[0].password;
          if (passwordReq === pass) {
              // login cookie
              session.loggedIn = true;
              resolve(result);
              console.log("Logged in");
          } else {
            // failed login
          }
        })
        .catch(function(error) {
          console.log(error);
        });
  })

};

exports.postUserLogout = function(args, res, next) {
  /**
   * parameters expected in the args:
  **/
  // no response value expected for this operation
  res.end();
}

