'use strict';

var url = require('url');
var utils = require('../utils/writer.js');
var Books = require('./BooksService');


module.exports.getBook = function getBook (req, res, next) {
  Books.getBook(req.swagger.params, res, next);
};

module.exports.getBookBestOfTheMonth = function getBookBestOfTheMonth (req, res, next) {
  Books.getBookBestOfTheMonth(req.swagger.params, res, next);
};

module.exports.getBookByTitle = function getBookByTitle (req, res, next) {

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

module.exports.getBookFavoriteReading = function getBookFavoriteReading (req, res, next) {
  Books.getBookFavoriteReading(req.swagger.params, res, next);
};

module.exports.getBookFindByAuthor = function getBookFindByAuthor (req, res, next) {
  Books.getBookFindByAuthor(req.swagger.params, res, next);
};

module.exports.getBookFindByEvent = function getBookFindByEvent (req, res, next) {
  Books.getBookFindByEvent(req.swagger.params, res, next);
};

module.exports.getBookFindByGenre = function getBookFindByGenre (req, res, next) {
  Books.getBookFindByGenre(req.swagger.params, res, next);
};

module.exports.getBookFindByTheme = function getBookFindByTheme (req, res, next) {
  Books.getBookFindByTheme(req.swagger.params, res, next);
};

module.exports.getBookISBN = function getBookISBN (req, res, next) {

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
