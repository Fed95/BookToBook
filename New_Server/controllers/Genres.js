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

module.exports.getGenreGenreName = function getGenreGenreName (req, res, next) {

    var genre_name = req.swagger.params['genre_name']['value'];
    Genres.getGenreGenreName(genre_name)
        .then(function (response) {
            if (response.length > 0) {
                utils.writeJson(res, response, 200);
            } else {
                utils.writeJson(res, "Genre not found.", 404);
            }
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};
