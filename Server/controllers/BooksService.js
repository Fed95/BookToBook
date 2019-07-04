'use strict';
var pg = require("../index.js");
var knex = pg.knex;

exports.getBook = function(args, res, next) {
  /**
   * parameters expected in the args:
  * info (String)
  * abstract Required (Boolean)
  * image Required (Boolean)
  * genres Required (Boolean)
  * themes Required (Boolean)
  * authors Information Required (Boolean)
  * events Information Required (Boolean)
  **/


  var examples = {};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }

};

exports.getBookBestOfTheMonth = function(args, res, next) {
  /**
   * parameters expected in the args:
  * month (Date)
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

exports.getBookByTitle = function(title) {
  /**
   * parameters expected in the args:
  * title (String)
  * abstract Required (Boolean)
  * image Required (Boolean)
  * genres Required (Boolean)
  * themes Required (Boolean)
  * authors information Required (Boolean)
  * events Information Required (Boolean)
  **/

  return new Promise(function (resolve, reject) {

    console.log("---------------executing getBookByTitle---------------------");
    console.log("title: '" + title + "'");
    console.log("------------------------------------------------------------");

    let myQuery = knex('new_schema.books')
        .leftJoin('new_schema.written_by AS wb', 'new_schema.books.isbn', 'wb.isbn')
        .leftJoin('new_schema.authors AS a', 'wb.author_id', 'a.author_id')
        .whereRaw("LOWER(title) LIKE '%' || LOWER(?) || '%' ", title)
        .then(result => {
          console.log(result);
          resolve(result)
        });

  });
};

exports.getBookFavoriteReading = function(args, res, next) {
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
  
};

exports.getBookFindByAuthor = function(args, res, next) {
  /**
   * parameters expected in the args:
  * firstName (String)
  * abstract Required (Boolean)
  * image Required (Boolean)
  * genres Required (Boolean)
  * themes Required (Boolean)
  * authors Information Required (Boolean)
  * events Information Required (Boolean)
  **/
    var examples = {};
    if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
};

exports.getBookFindByEvent = function(args, res, next) {
  /**
   * parameters expected in the args:
  * name (String)
  * abstract Required (Boolean)
  * image Required (Boolean)
  * genres Required (Boolean)
  * themes Required (Boolean)
  * authors Information Required (Boolean)
  * events Information Required (Boolean)
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

exports.getBookFindByGenre = function(args, res, next) {
  /**
   * parameters expected in the args:
  * abstract Required (Boolean)
  * image Required (Boolean)
  * genres Required (Boolean)
  * themes Required (Boolean)
  * authors&#39; Information Required (Boolean)
  * events Infromation Required (Boolean)
  * genre (String)
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

exports.getBookFindByTheme = function(args, res, next) {
  /**
   * parameters expected in the args:
  * abstract Required (Boolean)
  * image Required (Boolean)
  * genres Required (Boolean)
  * themes Infromation (Boolean)
  * authors&#39;Information Required (Boolean)
  * events Information Required (Boolean)
  * theme (String)
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

exports.getBookISBN = function(isbn) {
  /**
   * parameters expected in the args:
  * iSBN (Long)
  * abstract Required (Boolean)
  * image Required (Boolean)
  * genres Required (Boolean)
  * themes Required (Boolean)
  * authors Information Required (Boolean)
  * events Information Required (Boolean)
  **/
  return new Promise(function (resolve, reject) {

    console.log("---------------executing getBookISBN------------------------");
    console.log("isbn: '" + isbn + "'");
    console.log("------------------------------------------------------------");
    
    let myQuery = knex('new_schema.books AS b')
        .leftOuterJoin('new_schema.reviews AS r', 'b.isbn', 'r.isbn')
        .leftOuterJoin('new_schema.users AS u', 'r.user_mail', 'u.user_mail')

        .leftJoin('new_schema.book_genres AS bg', 'b.isbn', 'bg.isbn')
        .leftJoin('new_schema.genres AS g', 'bg.book_genre_name', 'g.genre_name')

        .leftJoin('new_schema.book_themes AS bt', 'b.isbn', 'bt.isbn')
        .leftJoin('new_schema.themes AS t', 'bt.book_theme_name', 't.theme_name')

        .innerJoin('new_schema.written_by AS wb', 'b.isbn', 'wb.isbn')
        .innerJoin('new_schema.authors AS a', 'wb.author_id', 'a.author_id')

        .where('b.isbn', isbn)
        .then(result => {
          resolve(result)
        });

  });
  
};

