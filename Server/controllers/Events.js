'use strict';

var url = require('url');

var utils = require('../utils/writer.js');
var Events = require('./EventsService');


module.exports.getEvent = function getEvent (req, res, next) {
  Events.getEvent(req.swagger.params, res, next);
};

module.exports.getEventEventID = function getEventEventID (req, res, next) {

  var event_id = req.swagger.params;
  console.log("inside Events.js; event_id = ", event_id);

  Events.getEventEventID(event_id)
      .then(function (response) {
        utils.writeJson(res, response);
      })
      .catch(function (response) {
        utils.writeJson(res, response);
      });

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
