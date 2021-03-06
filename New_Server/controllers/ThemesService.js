'use strict';
var pg = require("../index.js");
var knex = pg.knex;

exports.getTheme = function() {
  /**
   * parameters expected in the args:
  **/
  return new Promise(function (resolve, reject) {

    console.log("---------------executing getTheme---------------------------");
    console.log(" no params expected ");
    console.log("------------------------------------------------------------");

    let myQuery = knex('new_schema.themes')
        .then(result => {
          console.log(result);
          resolve(result)
        });

  });

};

exports.getThemeThemeName = function(theme_name) {
  /**
   * parameters expected in the args:
  * themeName (String)
  **/
  return new Promise(function (resolve, reject) {

    console.log("---------------executing getTheme---------------------------");
    console.log(" theme_name: ", theme_name);
    console.log("------------------------------------------------------------");

    let myQuery = knex('new_schema.themes AS t')
        .where('t.theme_name', theme_name)
        .leftJoin('new_schema.book_themes AS bt', 't.theme_name', 'bt.book_theme_name')
        .leftJoin('new_schema.books AS b', 'bt.isbn', 'b.isbn')
        .leftJoin('new_schema.written_by AS wb', 'b.isbn', 'wb.isbn')
        .leftJoin('new_schema.authors AS a', 'wb.author_id', 'a.author_id')
        .then(result => {
          resolve(result)
        });

  });
  
}

