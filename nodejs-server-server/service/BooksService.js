'use strict';


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
     resolve();
   } else {
     resolve();
   }
 });*/
    return new Promise(function (resolve, reject) {
        console.log("Pippo")
        let myQuery = pg("new_schema.book")
            .then(result => {
                JSON.stringify(result);
                console.log(result);
            });

        resolve("bella zio");
    })


};

