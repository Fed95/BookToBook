'use strict';


/**
 * Find books by title
 * Returns a list of books
 *
 * title String title of book to return
 * returns Book
 **/
exports.getBookByTitle = function(title) {
  return new Promise(function(resolve, reject) {
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
}

