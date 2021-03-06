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
        .leftJoin('new_schema.written_by AS wb', 'b.isbn', 'wb.isbn')
        .leftJoin('new_schema.authors AS a', 'wb.author_id', 'a.author_id')
        .then(result => {
          console.log(result);
          resolve(result)
        });

  });
  
}

