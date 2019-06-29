'use strict';

var utils = require('../utils/writer.js');
var Purchases = require('./PurchasesService');


module.exports.deletePurchasePurchaseID = function deletePurchasePurchaseID (req, res, next) {
  Purchases.deletePurchasePurchaseID(req.swagger.params, res, next);
};

module.exports.getPurchaseFindByUser = function getPurchaseFindByUser (req, res, next) {
    //req.session.loggedIn = true;
    /*if (!req.session || !req.session.loggedIn){
      utils.writeJson(res, { error: "Must be logged in"}, 404);
    }else{*/
        let user_mail = req.swagger.params['UserID']['value'];
        console.log("inside Purchase.js; user_mail = ", user_mail);

        Purchases.getPurchaseFindByUser(user_mail)
            .then(function (response) {
                console.log("Trovato");
                req.session.loggedIn = true;
                utils.writeJson(res, response);
            })
            .catch(function (response) {
                console.log("Non trovato");
                utils.writeJson(res, response);
            });
    //}
    console.log("No")
};

module.exports.getPurchasePurchaseID = function getPurchasePurchaseID (req, res, next) {
  Purchases.getPurchasePurchaseID(req.swagger.params, res, next);
};

module.exports.postPurchase = function postPurchase (req, res, next) {
  Purchases.postPurchase(req.swagger.params, res, next);
};

module.exports.postPurchaseCompleted = function postPurchaseCompleted (req, res, next) {
  Purchases.postPurchaseCompleted(req.swagger.params, res, next);
};

module.exports.postPurchasePurchaseID = function postPurchasePurchaseID (req, res, next) {
  Purchases.postPurchasePurchaseID(req.swagger.params, res, next);
};
