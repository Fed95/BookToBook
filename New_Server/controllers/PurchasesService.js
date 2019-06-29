'use strict';
var pg = require("../index.js");
var knex = pg.knex;

exports.deletePurchasePurchaseID = function(args, res, next) {
  /**
   * parameters expected in the args:
  * purchaseID (String)
  * iSBN (Long)
  **/
  // no response value expected for this operation
  res.end();
}

exports.getPurchaseFindByUser = function(user_mail) {
    /**
     * parameters expected in the args:
     * userID (Long)
     **/

    return new Promise(function (resolve, reject) {

        var userIdReq = "davide@mail.com";
        var passwordReq = "davide";
        console.log(userIdReq)

        return new Promise(function (resolve, reject) {

            //console.log('Starting auth procedure: req.session = ' + JSON.stringify(req.session))

            let myQuery = knex('new_schema.users')
                .where(
                    {
                        user_mail: userIdReq,
                        last_name: passwordReq
                    })
                .select('password')
                .then(result => {
                    //console.log(result[0]);
                    resolve(result);
                })

        });

        /*console.log("---------------executing getPurchaseFindByUser---------------------");
        console.log("user_mail: '" + user_mail + "'");
        console.log("------------------------------------------------------------");

        let myQuery = knex('new_schema.purchases AS p')
            .innerJoin('new_schema.users AS u', 'p.user_mail', 'u.user_mail')
            .leftOuterJoin('new_schema.bought_in as bought', 'p.purchase_id', 'bought.purchase_id')
            .leftOuterJoin('new_schema.books as b', 'bought.isbn', 'b.isbn')
            .where('u.temp_id', user_mail)
            .select('b.isbn', 'b.title', 'b.price', 'u.username', 'bought.quantity')
            .then(result => {
              console.log(result);
              resolve(result)
            });
        console.log("MAAAAAAAAAAAAAAAAAAAA")

      });*/

    });
}

exports.getPurchasePurchaseID = function(args, res, next) {
  /**
   * parameters expected in the args:
  * purchaseID (String)
  **/
   /* var examples = {};
    if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.postPurchase = function(args, res, next) {
  /**
   * parameters expected in the args:
  * body (Purchase)
  **/
  // no response value expected for this operation
  res.end();
}

exports.postPurchaseCompleted = function(args, res, next) {
  /**
   * parameters expected in the args:
  * date (Date)
  **/
  // no response value expected for this operation
  res.end();
}

exports.postPurchasePurchaseID = function(args, res, next) {
  /**
   * parameters expected in the args:
  * purchaseID (String)
  * iSBN (Long)
  **/
  // no response value expected for this operation
  res.end();
}

