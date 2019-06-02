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
        var lowerTitle = title.toLowerCase()
        let myQuery = knex('new_schema.books').select().where( 'title', 'like', '%'+lowerTitle+'%')
            .then(result => {
                resolve(result)
            });
    })
};

// knex.raw('select * from "new_schema"."books" where LOWER("title") like ?', '%'+title+'%')
// knex('new_schema.books').select().where( 'title', 'like', '%'+lowerTitle+'%')
// knex.select('*').from('new_schema.books').fullOuterJoin('new_schema.authors')