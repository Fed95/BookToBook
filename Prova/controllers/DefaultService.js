'use strict';

var pg = require("../index.js");
var knex = pg.knex;

exports.deletePurchasePurchaseID = function(args, res, next) {
  /**
   * parameters expected in the args:
  * purchaseID (String)
  * iSBN (Long)
  **/
  // no response value expected for this operation
  res.end();
}

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

exports.getAuthorAuthorID = function(args, res, next) {
  /**
   * parameters expected in the args:
  * authorID (String)
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

exports.getAuthorFindByName = function(args, res, next) {
  /**
   * parameters expected in the args:
  * name (String)
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

exports.getBook = function(args, res, next) {
  /**
   * parameters expected in the args:
  * info (String)
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
  **/
    var examples = {};
  examples['application/json'] = [ {
  "ISBN" : 123456789,
  "Publication Date" : "2000-01-23T04:56:07.000+00:00",
  "Language" : "aeiou",
  "Abstract" : "aeiou",
  "Title" : "aeiou",
  "Publisher" : "aeiou",
  "Edition" : 123456789,
  "Cover Image" : "aeiou",
  "Number of Pages" : 123456789
} ];
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
  * name (String)
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
  * eventname (String)
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

exports.getEvent = function(args, res, next) {
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

exports.getEventEventID = function(args, res, next) {
  /**
   * parameters expected in the args:
  * eventID (String)
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

exports.getEventFindByBook = function(args, res, next) {
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

exports.getEventFindByMonth = function(args, res, next) {
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

exports.getEventFindByName = function(args, res, next) {
  /**
   * parameters expected in the args:
  * name (String)
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

exports.getGenre = function(args, res, next) {
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

exports.getGenreGenreName = function(args, res, next) {
  /**
   * parameters expected in the args:
  * genreName (String)
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

exports.getPurchaseFindByUser = function(args, res, next) {
  /**
   * parameters expected in the args:
  * userID (Long)
  **/
  return new Promise(function (resolve, reject) {

    var userIdReq = "davide@mail.com";
    var passwordReq = "davide";
    console.log('userIdReq = ', userIdReq)
    console.log('passwordReq = ', passwordReq)

    //return new Promise(function (resolve, reject) {

    //console.log('Starting auth procedure: req.session = ' + JSON.stringify(req.session))

    let myQuery = knex('new_schema.users AS u')
        .where(
            {
              user_mail: userIdReq,
              password: passwordReq
            })
        .select('password')
        .then(result => {
          //console.log(result);
          resolve(result);
        })

  });
  
}

exports.getPurchasePurchaseID = function(args, res, next) {
  /**
   * parameters expected in the args:
  * purchaseID (String)
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

exports.getReviewReviewID = function(args, res, next) {
  /**
   * parameters expected in the args:
  * reviewID (String)
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

exports.getTheme = function(args, res, next) {
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

exports.getUserUserID = function(args, res, next) {
  /**
   * parameters expected in the args:
  * userID (String)
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

exports.postPurchase = function(args, res, next) {
  /**
   * parameters expected in the args:
  * body (Purchase)
  **/
  // no response value expected for this operation
  res.end();
}

exports.postPurchaseCompleted = function(args, res, next) {
  /**
   * parameters expected in the args:
  * date (Date)
  **/
  // no response value expected for this operation
  res.end();
}

exports.postPurchasePurchaseID = function(args, res, next) {
  /**
   * parameters expected in the args:
  * purchaseID (String)
  * iSBN (Long)
  **/
  // no response value expected for this operation
  res.end();
}

exports.postReview = function(args, res, next) {
  /**
   * parameters expected in the args:
  * body (Review)
  **/
  // no response value expected for this operation
  res.end();
}

exports.postUser = function(args, res, next) {
  /**
   * parameters expected in the args:
  * body (User)
  **/
    var examples = {};
  examples['application/json'] = {
  "username" : "aeiou"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.postUserLogin = function(args, res, next) {
  /**
   * parameters expected in the args:
  * body (Login)
  **/
   /* var examples = {};
    console.log("via")
  examples['application/json'] = {
  "username" : "aeiou"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }*/

  return new Promise(function (resolve, reject) {

    var userIdReq = "davide@mail.com";
    var passwordReq = "davide";
    console.log('userIdReq = ', userIdReq)
    console.log('passwordReq = ', passwordReq)

    //return new Promise(function (resolve, reject) {

    //console.log('Starting auth procedure: req.session = ' + JSON.stringify(req.session))

    let myQuery = knex('new_schema.users AS u')
        .where(
            {
              user_mail: userIdReq,
              password: passwordReq
            })
        .select('password')
        .then(result => {
          //console.log(result);
          resolve(result);
        })

  });
  
}

exports.postUserLogout = function(args, res, next) {
  /**
   * parameters expected in the args:
  **/
  // no response value expected for this operation
  res.end();
}

