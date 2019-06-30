'use strict';
var pg = require("../index.js");
var knex = pg.knex;

exports.getGenre = function() {
  /**
   * parameters expected in the args:
  **/
  return new Promise(function (resolve, reject) {

    console.log("---------------executing getGenre---------------------------");
    console.log(" no params expected ");
    console.log("------------------------------------------------------------");

    let myQuery = knex('new_schema.genres')
        .then(result => {
          console.log(result);
          resolve(result)
        });

  });
  
}

exports.getGenreFindByBook = function(args, res, next) {
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

exports.getGenreGenreName = function(genre_name) {
  /**
   * parameters expected in the args:
  * genreName (String)
  **/
  return new Promise(function (resolve, reject) {

    console.log("---------------executing getGenre---------------------------");
    console.log(" genre_name: ", genre_name);
    console.log("------------------------------------------------------------");

    let myQuery = knex('new_schema.genres AS g')
        .where('g.genre_name', genre_name)
        .leftJoin('new_schema.book_genres AS bg', 'g.genre_name', 'bg.book_genre_name')
        .leftJoin('new_schema.books AS b', 'bg.isbn', 'b.isbn')
        .then(result => {
          console.log(result);
          resolve(result)
        });

  });
  
}

