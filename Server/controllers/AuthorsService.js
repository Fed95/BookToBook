'use strict';
var pg = require("../index.js");
var knex = pg.knex;

exports.getAuthor = function(args, res, next) {
  /**
   * parameters expected in the args:
  **/
    var examples = {};
    if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.getAuthorAuthorID = function(author_id) {
  /**
   * parameters expected in the args:
  * authorID (String)
  **/
  return new Promise(function (resolve, reject) {

    console.log("---------------executing getAuthorAuthorID---------------------");
    console.log("author_id: '" + author_id + "'");
    console.log("-----------------------------------------------------------------");

      let myQuery = knex('new_schema.books AS b')
          .innerJoin('new_schema.written_by AS wb', 'b.isbn', 'wb.isbn')
          .innerJoin('new_schema.authors AS a', 'wb.author_id', 'a.author_id')
          .where('a.author_id', author_id)
          .then(result => {
              resolve(result)
          });
      /*
    let myQuery = knex('new_schema.authors').where('author_id', author_id)
        .then(result => {
          console.log("hello");
          console.log(result);
          resolve(result)
        });

       */

  });
  
}

exports.getAuthorFindByBook = function(args, res, next) {
  /**
   * parameters expected in the args:
  * iSBN (Long)
  **/
    var examples = {};
    if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.getAuthorFindByName = function(name) {
  /**
   * parameters expected in the args:
  * name (String)
  **/


  return new Promise(function (resolve, reject) {

    console.log("---------------executing getAuthorFindByName---------------------");
    console.log("name: '" + name + "'");
    console.log("-----------------------------------------------------------------");


    let myQuery = knex('new_schema.authors').whereRaw("LOWER(name) LIKE '%' || LOWER(?) || '%' ", name)
        .then(result => {
          console.log("hello");
          console.log(result);
          resolve(result)
        });

  });

  
};

