'use strict';
var pg = require("../index.js");
var knex = pg.knex;

var maxPurchaseId = 3;

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

        console.log("---------------executing getPurchaseFindByUser---------------------");
        console.log("user_mail: '" + user_mail + "'");
        console.log("------------------------------------------------------------");

        let myQuery = knex('new_schema.purchases AS p')
            .innerJoin('new_schema.users AS u', 'p.user_mail', 'u.user_mail')
            .leftOuterJoin('new_schema.bought_in as bought', 'p.purchase_id', 'bought.purchase_id')
            .leftOuterJoin('new_schema.books as b', 'bought.isbn', 'b.isbn')
            .where('u.user_mail', user_mail)
            .select('b.isbn', 'b.title', 'b.price', 'u.username', 'bought.quantity')
            .then(result => {
              console.log(result);
              resolve(result)
            });
      });
};

exports.getPurchasePurchaseID = function(args, res, next) {
  /**
   * parameters expected in the args:
  * purchaseID (String)
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

exports.postPurchase = function(ISBN, user_mail) {
  /**
   * parameters expected in the args:
  * body (Purchase)
  **/
    return new Promise(function (resolve, reject) {

        console.log("---------------executing postPurchase---------------------");
        console.log("user_mail: '" + user_mail + "'");
        console.log("ISBN: '" + ISBN + "'");
        console.log("------------------------------------------------------------");

        var purchase_id;

        let myQuery = knex('new_schema.purchases')
            .where({
                user_mail: user_mail,
                completed: false
            })
            .then(result => {
                if (!result || !result[0])  {  // not found!
                    maxPurchaseId += 1;
                    purchase_id = maxPurchaseId;
                    return knex('new_schema.purchases')
                        .insert({purchase_id: purchase_id, user_mail: user_mail})
                        .then(result2 => {
                            if(ISBN){
                                return knex('new_schema.bought_in')
                                    .insert({purchase_id: purchase_id, ISBN: ISBN})
                            }

                        })
                }
                else{
                    purchase_id = result[0].purchase_id;
                    return knex('new_schema.bought_in')
                        .insert({purchase_id: purchase_id, ISBN: ISBN})
                }

            });
    });


};

exports.postPurchaseCompleted = function(args, res, next) {
  /**
   * parameters expected in the args:
  * date (Date)
  **/
  // no response value expected for this operation
  res.end();
}

exports.postPurchasePurchaseID = function(user_mail) {
  /**
   * parameters expected in the args:
  * purchaseID (String)
  * iSBN (Long)
  **/

    return new Promise(function (resolve, reject) {

        console.log("---------------executing postPurchase---------------------");
        console.log("user_mail: '" + user_mail + "'");
        console.log("------------------------------------------------------------");


        let myQuery = knex('new_schema.purchases')
            .where({
                user_mail: user_mail,
                completed: false
            })
            .then(result => {

                let purchase_id = result[0].purchase_id;
                return knex('new_schema.purchases')
                    .where('purchase_id', purchase_id)
                    .update('quantity', 'quantity' + 1)
                    .then(result2 => {
                        resolve(result2)
                    })
            })
})
}

