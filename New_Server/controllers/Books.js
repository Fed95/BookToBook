'use strict';

var url = require('url');
var utils = require('../utils/writer.js');
var Books = require('./BooksService');


module.exports.getBook = function getBook(req, res, next) {
    Books.getBook(req.swagger.params, res, next);
};

module.exports.getBookBestOfTheMonth = function getBookBestOfTheMonth(req, res, next) {
    Books.getBookBestOfTheMonth(req.swagger.params, res, next);
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

    //TODO: DECIDE WHAT TO DO WITH THIS QUERY

    var p = req.swagger.params;
    console.log("inside Books.js; p = ", p);

    Books.getBookFavoriteReading(p)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.getBookFindByAuthor = function getBookFindByAuthor(req, res, next) {
    Books.getBookFindByAuthor(req.swagger.params, res, next);
};

module.exports.getBookFindByEvent = function getBookFindByEvent(req, res, next) {
    Books.getBookFindByEvent(req.swagger.params, res, next);
};

module.exports.getBookFindByGenre = function getBookFindByGenre(req, res, next) {

    var genres = req.swagger.params['genre']['value'];
    console.log("inside getBookFindByGenre; p = ", genres);

    Books.getBookFindByGenre(genres)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.getBookFindByTheme = function getBookFindByTheme(req, res, next) {
    Books.getBookFindByTheme(req.swagger.params, res, next);
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
