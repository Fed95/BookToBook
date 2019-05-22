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
    // query example
    /*return new Promise(function(resolve, reject) {
   var examples = {};
   examples['application/json'] = {
 "id" : "The BFG"
};
   if (Object.keys(examples).length > 0) {
     resolve(examples[Object.keys(examples)[0]]);
   } else {
     resolve();
   }
 });*/

    return new Promise(function (resolve, reject) {
        console.log("Pippo");
        let myQuery = dB("new_schema.book")
            .then(result => {
                resolve(result)
                //console.log("ciaoneuao");
            });
        console.log(myQuery);
    })


};

