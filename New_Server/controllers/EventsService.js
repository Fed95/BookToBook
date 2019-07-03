'use strict';
var pg = require("../index.js");
var knex = pg.knex;

exports.getEvent = function() {
  /**
   * parameters expected in the args:
  **/
  return new Promise(function (resolve, reject) {

    console.log("---------------executing getEvent--------------------");
    console.log("event_id: no params expected");
    console.log("------------------------------------------------------------");

    let myQuery = knex('new_schema.events as e')
        .leftJoin('new_schema.books AS b', 'e.isbn', 'b.isbn')
        .leftJoin('new_schema.written_by AS wb', 'e.isbn', 'wb.isbn')
        .leftJoin('new_schema.authors AS a', 'wb.author_id', 'a.author_id')
        .then(result => {
          console.log(result);
          resolve(result)
        });
  });

  
};

exports.getEventEventID = function(event_id) {
  /**
   * parameters expected in the args:
  * eventID (String)
  **/

  //todo: extend query to get reviews and events

  return new Promise(function (resolve, reject) {

    console.log("---------------executing getEventEventID--------------------");
    console.log("event_id: '" + event_id + "'");
    console.log("------------------------------------------------------------");

    let myQuery = knex('new_schema.events as e')
        .where('e.event_id', event_id)
        .leftJoin('new_schema.books AS b', 'e.isbn', 'b.isbn')
        .leftJoin('new_schema.written_by AS wb', 'e.isbn', 'wb.isbn')
        .leftJoin('new_schema.authors AS a', 'wb.author_id', 'a.author_id')
        .then(result => {
          console.log(result);
          resolve(result)
        });
  });
  
};

exports.getEventFindByBook = function(isbn) {
  /**
   * parameters expected in the args:
  * iSBN (Long)
  **/
  return new Promise(function (resolve, reject) {

    console.log("---------------executing getEventFindByBook-----------------");
    console.log("isbn: '" + isbn + "'");
    console.log("------------------------------------------------------------");

    let myQuery = knex('new_schema.events as e')
        .where('e.isbn', isbn)
        .then(result => {
          console.log(result);
          resolve(result)
        });
  });
  
}

exports.getEventFindByMonth = function(month) {
  /**
   * parameters expected in the args:
  * month (Date)
  **/
  return new Promise(function (resolve, reject) {

    console.log("---------------executing getEventFindByMonth-----------------");
    console.log("month: '" + month + "'");
    console.log("------------------------------------------------------------");

    let myQuery = knex('new_schema.events as e')
        .whereRaw(`EXTRACT(MONTH FROM event_date::date) = ?`, [month])
        .join('new_schema.books AS b', 'e.isbn', 'b.isbn')
        .join('new_schema.written_by AS wb', 'b.isbn', 'wb.isbn')
        .join('new_schema.authors AS a', 'wb.author_id', 'a.author_id')
        .then(result => {
          console.log(result);
          resolve(result)
        });
  });
  
}



