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
        console.log("------------------------------------------------------------");

        let myQuery = knex('new_schema.books')
            .leftJoin('new_schema.written_by AS wb', 'new_schema.books.isbn', 'wb.isbn')
            .leftJoin('new_schema.authors AS a', 'wb.author_id', 'a.author_id')
            .whereRaw("LOWER(title) LIKE '%' || LOWER(?) || '%' ", title)
            .then(result => {
                resolve(result)
            });
    })
};
