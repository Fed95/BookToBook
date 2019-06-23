'use strict';

var url = require('url');


var Prova = require('./ProvaService');


module.exports.getProva = function getProva (req, res, next) {
  Prova.getProva(req.swagger.params, res, next);
};

module.exports.postProva = function postProva (req, res, next) {
  Prova.postProva(req.swagger.params, res, next);
};
