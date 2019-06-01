'use strict';

var pg = require("../index.js");
var knex = pg.knex;

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
        console.log("---------------executing getBookByTitle---------------------");
        console.log("title: '" + title + "'");
        let myQuery = knex('new_schema.books').select().where( 'title', 'like', '%'+title+'%')
            .then(result => {
                resolve(result)
            });
    })
};

