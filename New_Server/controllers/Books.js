'use strict';

var url = require('url');
var utils = require('../utils/writer.js');
var Books = require('./BooksService');


module.exports.getBookBestOfTheMonth = function getBookBestOfTheMonth(req, res, next) {

    var month = req.swagger.params['Month']['originalValue'];
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

    var title = req.swagger.params['Title']['value'];
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


module.exports.getBookFindBySimilarBooks = function getBookFindBySimilarBooks(req, res, next) {

    var genres = req.swagger.params['genre']['value'];
    console.log("inside getBookFindByGenre; p = ", genres);

    Books.getBookFindBySimilarBooks(genres)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};


module.exports.getBookISBN = function getBookISBN(req, res, next) {

    var isbn = req.swagger.params['ISBN']['value'];
    console.log("inside Books.js; isbn = ", isbn);

    Books.getBookISBN(isbn)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};
