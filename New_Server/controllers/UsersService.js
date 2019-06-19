'use strict';

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
  // no response value expected for this operation
  res.end();
}

exports.postUserLogin = function(args, res, next) {
  /**
   * parameters expected in the args:
  * contentType (String)
  * body (Login)
  **/
  // no response value expected for this operation
  res.end();
}

exports.postUserLogout = function(args, res, next) {
  /**
   * parameters expected in the args:
  **/
  // no response value expected for this operation
  res.end();
}

