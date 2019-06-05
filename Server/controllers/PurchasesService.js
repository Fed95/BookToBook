'use strict';

exports.deletePurchasePurchaseID = function(args, res, next) {
  /**
   * parameters expected in the args:
  * purchaseID (String)
  * iSBN (Long)
  **/
  // no response value expected for this operation
  res.end();
}

exports.getPurchaseFindByUser = function(args, res, next) {
  /**
   * parameters expected in the args:
  * userID (Long)
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

