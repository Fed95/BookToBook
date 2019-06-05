'use strict';

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
  
}

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

exports.getBookByTitle = function(args, res, next) {
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
    var examples = {};
  examples['application/json'] = {
  "ISBN" : 123456789,
  "Publication Date" : "2000-01-23T04:56:07.000+00:00",
  "Language" : "aeiou",
  "Abstract" : "aeiou",
  "Title" : "aeiou",
  "Publisher" : "aeiou",
  "Edition" : 123456789,
  "Cover Image" : "aeiou",
  "Number of Pages" : 123456789
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

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
  
}

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
  
}

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

exports.getBookISBN = function(args, res, next) {
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
    var examples = {};
    if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

