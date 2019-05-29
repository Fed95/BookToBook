'use strict';

var pg = require("../index.js");
var knex = pg.dB;

/**
 * Find books by title
 * Returns a list of books
 *
 * title String title of book to return
 * returns Book
 **/


exports.getBookByTitle = function(title) {
    // query example (returns all books independently by the specified title)
    return new Promise(function (resolve, reject) {
        console.log("Pippo");
        let myQuery = knex('new_schema.book').where("id", 1).select().toSQL()
            .then(result => {
                resolve(result)
            });
    })

};

