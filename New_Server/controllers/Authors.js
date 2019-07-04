'use strict';

var utils = require('../utils/writer.js');
var Authors = require('./AuthorsService');


module.exports.getAuthorAuthorID = function getAuthorAuthorID(req, res, next) {

    var author_id = req.swagger.params['author_id']['value'];
    console.log("inside Authors.js; author_id = ", author_id);

    Authors.getAuthorAuthorID(author_id)
        .then(function (response) {
            if (response.length > 0) {
                utils.writeJson(res, response, 200);
            } else {
                utils.writeJson(res, "Author not found.", 404);
            }
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.getAuthorFindByBook = function getAuthorFindByBook(req, res, next) {

    var isbn = req.swagger.params['isbn']['value'];
    console.log("inside Authors.js; isbn = ", isbn);

    Authors.getAuthorFindByBook(isbn)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.getAuthorFindByName = function getAuthorFindByName(req, res, next) {

    var name = req.swagger.params['name']['value'];
    console.log("inside Authors.js; name = ", name);

    Authors.getAuthorFindByName(name)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });

};
