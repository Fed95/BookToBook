'use strict';

var utils = require('../utils/writer.js');
var Books = require('../service/BooksService');

module.exports.getBookByTitle = function getBookByTitle (req, res, next) {
  var title = req.swagger.params['title'].value;
  Books.getBookByTitle(title)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
