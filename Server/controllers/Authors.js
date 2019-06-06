'use strict';

var url = require('url');


var Authors = require('./AuthorsService');


module.exports.getAuthor = function getAuthor (req, res, next) {
  Authors.getAuthor(req.swagger.params, res, next);
};

module.exports.getAuthorAuthorID = function getAuthorAuthorID (req, res, next) {
  Authors.getAuthorAuthorID(req.swagger.params, res, next);
};

module.exports.getAuthorFindByBook = function getAuthorFindByBook (req, res, next) {
  Authors.getAuthorFindByBook(req.swagger.params, res, next);
};

module.exports.getAuthorFindByName = function getAuthorFindByName (req, res, next) {

  var title = req.swagger.params['Name']['value'];
  console.log("inside Authors.js; title = ", title);

  Authors.getAuthorFindByName(name)
      .then(function (response) {
        utils.writeJson(res, response);
      })
      .catch(function (response) {
        utils.writeJson(res, response);
      });

  Authors.getAuthorFindByName(req.swagger.params, res, next);
};
