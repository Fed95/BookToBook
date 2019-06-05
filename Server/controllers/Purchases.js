'use strict';

var url = require('url');


var Purchases = require('./PurchasesService');


module.exports.deletePurchasePurchaseID = function deletePurchasePurchaseID (req, res, next) {
  Purchases.deletePurchasePurchaseID(req.swagger.params, res, next);
};

module.exports.getPurchaseFindByUser = function getPurchaseFindByUser (req, res, next) {
  Purchases.getPurchaseFindByUser(req.swagger.params, res, next);
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
