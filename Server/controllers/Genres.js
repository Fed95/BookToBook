'use strict';

var url = require('url');

var utils = require('../utils/writer.js');
var Genres = require('./GenresService');


module.exports.getGenre = function getGenre (req, res, next) {
  Genres.getGenre()
      .then(function (response) {
        utils.writeJson(res, response);
      })
      .catch(function (response) {
        utils.writeJson(res, response);
      });
};

module.exports.getGenreFindByBook = function getGenreFindByBook (req, res, next) {
  Genres.getGenreFindByBook(req.swagger.params, res, next);
};

module.exports.getGenreGenreName = function getGenreGenreName (req, res, next) {
  Genres.getGenreGenreName(req.swagger.params, res, next);
};
