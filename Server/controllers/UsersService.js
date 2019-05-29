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
  * body (User)
  **/
  // no response value expected for this operation
  res.end();
}

