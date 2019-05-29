'use strict';

var url = require('url');


var Authors = require('./AuthorsService');


module.exports.getAuthorAuthorID = function getAuthorAuthorID (req, res, next) {
  Authors.getAuthorAuthorID(req.swagger.params, res, next);
};

module.exports.getAuthorFindByBook = function getAuthorFindByBook (req, res, next) {
  Authors.getAuthorFindByBook(req.swagger.params, res, next);
};

module.exports.getAuthorFindByName = function getAuthorFindByName (req, res, next) {
  Authors.getAuthorFindByName(req.swagger.params, res, next);
};
