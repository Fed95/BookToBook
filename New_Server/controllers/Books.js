'use strict';

var url = require('url');
var utils = require('../utils/writer.js');
var Books = require('./BooksService');


module.exports.getBookBestOfTheMonth = function getBookBestOfTheMonth(req, res, next) {

    var month = req.swagger.params['month']['originalValue'];
    console.log("inside Books.js; Month = ", month);

    Books.getBookBestOfTheMonth(month)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.getBookByTitle = function getBookByTitle(req, res, next) {

    var title = req.swagger.params['title']['value'];
    console.log("inside Books.js; title = ", title);

    Books.getBookByTitle(title)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });

};

module.exports.getBookFavoriteReading = function getBookFavoriteReading(req, res, next) {

    Books.getBookFavoriteReading()
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};


module.exports.getBookFindSimilarBooks = function getBookFindSimilarBooks(req, res, next) {

    //todo: set this to params
    var genres = req.swagger.params['params']['value'];
    console.log("inside getBookFindByGenre; p = ", genres);

    Books.getBookFindSimilarBooks(genres)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};


module.exports.getBookISBN = function getBookISBN(req, res, next) {

    var isbn = req.swagger.params['isbn']['value'];
    console.log("inside Books.js; isbn = ", isbn);

    Books.getBookISBN(isbn)
        .then(function (response) {
            if (response.length > 0) {
                utils.writeJson(res, response, 200);
            } else {
                utils.writeJson(res, "Book not found.", 404);
            }
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};
