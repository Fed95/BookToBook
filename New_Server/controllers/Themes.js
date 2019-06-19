'use strict';

var url = require('url');


var Themes = require('./ThemesService');


module.exports.getTheme = function getTheme (req, res, next) {
  Themes.getTheme(req.swagger.params, res, next);
};

module.exports.getThemeFindByBook = function getThemeFindByBook (req, res, next) {
  Themes.getThemeFindByBook(req.swagger.params, res, next);
};

module.exports.getThemeThemeName = function getThemeThemeName (req, res, next) {
  Themes.getThemeThemeName(req.swagger.params, res, next);
};
