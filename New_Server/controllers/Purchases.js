'use strict';

var utils = require('../utils/writer.js');
var Purchases = require('./PurchasesService');


module.exports.deletePurchasePurchaseID = function deletePurchasePurchaseID (req, res, next) {
  Purchases.deletePurchasePurchaseID(req.swagger.params, res, next);
};

module.exports.getPurchaseFindByUser = function getPurchaseFindByUser (req, res, next) {
        let user_mail = req.session.user_mail;
        console.log("inside Purchase.js; user_mail = ", user_mail);

        Purchases.getPurchaseFindByUser(user_mail)
            .then(function (response) {
                utils.writeJson(res, response);
            })
            .catch(function (response) {
                utils.writeJson(res, response);
            });
};

module.exports.getPurchasePurchaseID = function getPurchasePurchaseID (req, res, next) {
  Purchases.getPurchasePurchaseID(req.swagger.params, res, next);
};

module.exports.postPurchase = function postPurchase (req, res, next) {
  var ISBN = req.swagger.params["ISBN"].value;
  var user_mail = req.session.user_mail;

  console.log("ISBN");

  Purchases.postPurchase(ISBN, user_mail)
      .then(function (response) {
          console.log("Added Book to Cart")
      utils.writeJson(res, response);
  })
      .catch(function (response) {
          utils.writeJson(res, response);
      });
};

module.exports.postPurchaseCompleted = function postPurchaseCompleted (req, res, next) {
  Purchases.postPurchaseCompleted(req.swagger.params, res, next);
};

module.exports.postPurchasePurchaseID = function postPurchasePurchaseID (req, res, next) {

    var user_mail = req.session.user_mail;

  Purchases.postPurchasePurchaseID(user_mail)
      .then(function (response) {
      utils.writeJson(res, response);
  })
      .catch(function (response) {
          utils.writeJson(res, response);
      });
};

module.exports.postPurchaseBook = function postPurchasePurchaseID (req, res, next) {


    var purchase_id = req.swagger.params["purchase_id"].value;
    var isbn = req.swagger.params["isbn"].value;
    var quantity = req.swagger.params["quantity"].value;


    Purchases.postPurchaseBook(purchase_id, isbn, quantity)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.deletePurchaseBook = function postPurchasePurchaseID (req, res, next) {

    var purchase_id = req.swagger.params["purchase_id"].value;
    var isbn = req.swagger.params["isbn"].value;

    Purchases.deletePurchaseBook(purchase_id, isbn)
        .then(function (response) {
            console.log("Delete Book")
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};
