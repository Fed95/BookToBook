'use strict';

var url = require('url');
var utils = require('../utils/writer.js');
var Themes = require('./ThemesService');


module.exports.getTheme = function getTheme (req, res, next) {

  Themes.getTheme()
      .then(function (response) {
        utils.writeJson(res, response);
      })
      .catch(function (response) {
        utils.writeJson(res, response);
      });
};

module.exports.getThemeFindByBook = function getThemeFindByBook (req, res, next) {
  Themes.getThemeFindByBook(req.swagger.params, res, next);
};

module.exports.getThemeThemeName = function getThemeThemeName (req, res, next) {

    var theme_name = req.swagger.params['themeName']['value'];
    console.log("inside theme.js; theme_name = ", theme_name);

    themes.getThemeThemeName(theme_name)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};
