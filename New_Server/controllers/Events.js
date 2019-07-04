'use strict';

var url = require('url');

var utils = require('../utils/writer.js');
var Events = require('./EventsService');


module.exports.getEvent = function getEvent(req, res, next) {

    Events.getEvent()
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.getEventEventID = function getEventEventID(req, res, next) {

    var event_id = req.swagger.params['event_id']['value'];
    console.log("inside Events.js; event_id = ", event_id);

    Events.getEventEventID(event_id)
        .then(function (response) {
            if (response.length > 0) {
                utils.writeJson(res, response, 200);
            } else {
                utils.writeJson(res, "Event not found.", 404);
            }
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.getEventFindByBook = function getEventFindByBook(req, res, next) {

    var isbn = req.swagger.params['isbn']['value'];
    console.log("inside Events.js; isbn = ", isbn);

    Events.getEventFindByBook(isbn)
        .then(function (response) {
            if (response.length > 0) {
                utils.writeJson(res, response, 200);
            } else {
                utils.writeJson(res, "Event not found.", 404);
            }
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.getEventFindByMonth = function getEventFindByMonth(req, res, next) {

    var month = req.swagger.params['month']['originalValue'];
    console.log("inside Events.js; Month = ", month);

    Events.getEventFindByMonth(month)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};
