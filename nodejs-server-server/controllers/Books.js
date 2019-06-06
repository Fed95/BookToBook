'use strict';

var utils = require('../utils/writer.js');
var BooksService = require('../service/BooksService');

module.exports.getBookByTitle = function getBookByTitle (req, res, next) {

  var title = req.swagger.params['title'].value;
  console.log("inside Books.js; title = ", title)

  BooksService.getBookByTitle(title)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
