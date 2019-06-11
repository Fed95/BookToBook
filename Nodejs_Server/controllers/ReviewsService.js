'use strict';

exports.getReviewReviewID = function(args, res, next) {
  /**
   * parameters expected in the args:
  * reviewID (String)
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

exports.postReview = function(args, res, next) {
  /**
   * parameters expected in the args:
  * body (Review)
  **/
  // no response value expected for this operation
  res.end();
}

