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
        let myQuery = dB().select("title").from("new_schema.book")
            .then(result => {
                JSON.stringify(result);
                console.log("ciaoneuao");
            });
        /*let myQuery = "{\"id\": \"Re\"}";
        console.log("ciaone");
        console.log(myQuery);*/
        resolve(myQuery);
    })


};

