'use strict';
var pg = require("../index.js");
var knex = pg.knex;



exports.postUser = function(user_mail, password, username, user_shipping_address) {
  /**
   * parameters expected in the args:
  * contentType (String)
  * body (User)
  **/
  console.log("---------------executing postUser-----------------------------");
    console.log("user mail and pw: ", user_mail, password)
    console.log("------------------------------------------------------------");

    return new Promise(function (resolve, reject) {

        let myQuery = knex('new_schema.users')
            .insert({user_mail: user_mail, password: password, username: username, user_shipping_address: user_shipping_address})
            .then(result => {
                console.log(result);
                resolve(result);
            })
            .catch(error => reject(error))
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


