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
<<<<<<< HEAD
    return new Promise(function(resolve, reject) {
=======
>>>>>>> 00e5211634accbb708e417f727aaa1b337556bc5
    var examples = {};
    examples['application/json'] = {
  "id" : "The BFG"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
    /*return new Promise(function (resolve, reject) {
        console.log("Pippo")
        let myQuery = pg("new_schema.book")
            .then(result => {
                console.log(result);
                JSON.stringify(result);

            });
        resolve(myQuery);
    })*/
};

