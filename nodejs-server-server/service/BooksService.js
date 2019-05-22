'use strict';

var pg = require("../index.js");
var dB = pg.dB;

/**
 * Find books by title
 * Returns a list of books
 *
 * title String title of book to return
 * returns Book
 **/



exports.getBookByTitle = function(title) {
    // query example (only get not by title)
    return new Promise(function (resolve, reject) {
        console.log("Pippo");
        let myQuery = dB("new_schema.book")
            .then(result => {
                resolve(result)
            });
    })

};

