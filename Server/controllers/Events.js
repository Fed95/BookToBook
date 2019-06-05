'use strict';

var url = require('url');


var Events = require('./EventsService');


module.exports.getEvent = function getEvent (req, res, next) {
  Events.getEvent(req.swagger.params, res, next);
};

module.exports.getEventEventID = function getEventEventID (req, res, next) {
  Events.getEventEventID(req.swagger.params, res, next);
};

module.exports.getEventFindByBook = function getEventFindByBook (req, res, next) {
  Events.getEventFindByBook(req.swagger.params, res, next);
};

module.exports.getEventFindByMonth = function getEventFindByMonth (req, res, next) {
  Events.getEventFindByMonth(req.swagger.params, res, next);
};

module.exports.getEventFindByName = function getEventFindByName (req, res, next) {
  Events.getEventFindByName(req.swagger.params, res, next);
};
