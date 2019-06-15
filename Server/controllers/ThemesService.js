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

exports.getThemeFindByBook = function(args, res, next) {
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

exports.getThemeThemeName = function(args, res, next) {
  /**
   * parameters expected in the args:
  * themeName (String)
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

