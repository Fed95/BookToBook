'use strict';

var url = require('url');

var utils = require('../utils/writer.js');
var Reviews = require('./ReviewsService');


module.exports.getReviewReviewID = function getReviewReviewID (req, res, next) {
  Reviews.getReviewReviewID(req.swagger.params, res, next);
};

module.exports.postReview = function postReview (req, res, next) {
  Reviews.postReview(req.swagger.params, res, next);
};
