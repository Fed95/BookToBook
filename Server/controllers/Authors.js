'use strict';

var utils = require('../utils/writer.js');
var Authors = require('./AuthorsService');


module.exports.getAuthor = function getAuthor(req, res, next) {
    Authors.getAuthor(req.swagger.params, res, next);
};

module.exports.getAuthorAuthorID = function getAuthorAuthorID(req, res, next) {

    var author_id = req.swagger.params['AuthorID']['value'];
    console.log("inside Authors.js; author_id = ", author_id);

    Authors.getAuthorAuthorID(author_id)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.getAuthorFindByBook = function getAuthorFindByBook(req, res, next) {
    Authors.getAuthorFindByBook(req.swagger.params, res, next);
};

module.exports.getAuthorFindByName = function getAuthorFindByName(req, res, next) {

    var name = req.swagger.params['Name']['value'];
    console.log("inside Authors.js; title = ", name);

    Authors.getAuthorFindByName(name)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });

};
