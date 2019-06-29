'use strict';

var url = require('url');

var utils = require('../utils/writer.js');

var Default = require('./DefaultService');


module.exports.deletePurchasePurchaseID = function deletePurchasePurchaseID (req, res, next) {
  Default.deletePurchasePurchaseID(req.swagger.params, res, next);
};

module.exports.getAuthor = function getAuthor (req, res, next) {
  Default.getAuthor(req.swagger.params, res, next);
};

module.exports.getAuthorAuthorID = function getAuthorAuthorID (req, res, next) {
  Default.getAuthorAuthorID(req.swagger.params, res, next);
};

module.exports.getAuthorFindByBook = function getAuthorFindByBook (req, res, next) {
  Default.getAuthorFindByBook(req.swagger.params, res, next);
};

module.exports.getAuthorFindByName = function getAuthorFindByName (req, res, next) {
  Default.getAuthorFindByName(req.swagger.params, res, next);
};

module.exports.getBook = function getBook (req, res, next) {
  Default.getBook(req.swagger.params, res, next);
};

module.exports.getBookBestOfTheMonth = function getBookBestOfTheMonth (req, res, next) {
  Default.getBookBestOfTheMonth(req.swagger.params, res, next);
};

module.exports.getBookByTitle = function getBookByTitle (req, res, next) {
  Default.getBookByTitle(req.swagger.params, res, next);
};

module.exports.getBookFavoriteReading = function getBookFavoriteReading (req, res, next) {
  Default.getBookFavoriteReading(req.swagger.params, res, next);
};

module.exports.getBookFindByAuthor = function getBookFindByAuthor (req, res, next) {
  Default.getBookFindByAuthor(req.swagger.params, res, next);
};

module.exports.getBookFindByEvent = function getBookFindByEvent (req, res, next) {
  Default.getBookFindByEvent(req.swagger.params, res, next);
};

module.exports.getBookFindByGenre = function getBookFindByGenre (req, res, next) {
  Default.getBookFindByGenre(req.swagger.params, res, next);
};

module.exports.getBookFindByTheme = function getBookFindByTheme (req, res, next) {
  Default.getBookFindByTheme(req.swagger.params, res, next);
};

module.exports.getBookISBN = function getBookISBN (req, res, next) {
  Default.getBookISBN(req.swagger.params, res, next);
};

module.exports.getEvent = function getEvent (req, res, next) {
  Default.getEvent(req.swagger.params, res, next);
};

module.exports.getEventEventID = function getEventEventID (req, res, next) {
  Default.getEventEventID(req.swagger.params, res, next);
};

module.exports.getEventFindByBook = function getEventFindByBook (req, res, next) {
  Default.getEventFindByBook(req.swagger.params, res, next);
};

module.exports.getEventFindByMonth = function getEventFindByMonth (req, res, next) {
  Default.getEventFindByMonth(req.swagger.params, res, next);
};

module.exports.getEventFindByName = function getEventFindByName (req, res, next) {
  Default.getEventFindByName(req.swagger.params, res, next);
};

module.exports.getGenre = function getGenre (req, res, next) {
  Default.getGenre(req.swagger.params, res, next);
};

module.exports.getGenreFindByBook = function getGenreFindByBook (req, res, next) {
  Default.getGenreFindByBook(req.swagger.params, res, next);
};

module.exports.getGenreGenreName = function getGenreGenreName (req, res, next) {
  Default.getGenreGenreName(req.swagger.params, res, next);
};

module.exports.getPurchaseFindByUser = function getPurchaseFindByUser (req, res, next) {
  console.log("VEEEEEEEE")
  Default.getPurchaseFindByUser(req.swagger.params, res, next).then(function (response) {
    console.log("Finito")
    //console.log(req)
    req.session.loggedIn = true;
    req.session.save();
    //res.end()
    //res.setHeader('Content-Type', 'application/json');

    utils.writeJson(res, response);

    //res.end();
  }).catch(function (response) {
    console.log("Sbagliato")
    utils.writeJson(res, response);
  });
};

module.exports.getPurchasePurchaseID = function getPurchasePurchaseID (req, res, next) {
  Default.getPurchasePurchaseID(req.swagger.params, res, next);
};

module.exports.getReviewReviewID = function getReviewReviewID (req, res, next) {
  Default.getReviewReviewID(req.swagger.params, res, next);
};

module.exports.getTheme = function getTheme (req, res, next) {
  Default.getTheme(req.swagger.params, res, next);
};

module.exports.getThemeFindByBook = function getThemeFindByBook (req, res, next) {
  Default.getThemeFindByBook(req.swagger.params, res, next);
};

module.exports.getThemeThemeName = function getThemeThemeName (req, res, next) {
  Default.getThemeThemeName(req.swagger.params, res, next);
};

module.exports.getUserUserID = function getUserUserID (req, res, next) {
  Default.getUserUserID(req.swagger.params, res, next);
};

module.exports.postPurchase = function postPurchase (req, res, next) {
  Default.postPurchase(req.swagger.params, res, next);
};

module.exports.postPurchaseCompleted = function postPurchaseCompleted (req, res, next) {
  Default.postPurchaseCompleted(req.swagger.params, res, next);
};

module.exports.postPurchasePurchaseID = function postPurchasePurchaseID (req, res, next) {
  Default.postPurchasePurchaseID(req.swagger.params, res, next);
};

module.exports.postReview = function postReview (req, res, next) {
  Default.postReview(req.swagger.params, res, next);
};

module.exports.postUser = function postUser (req, res, next) {
  Default.postUser(req.swagger.params, res, next);
};

module.exports.postUserLogin = function postUserLogin (req, res, next) {
  console.log("hello from Users.js - postUserLogin");

  Default.postUserLogin(req.body, req, res, next)
      .then(function (response) {
        console.log("Finito")
        res.redirect(307, '/api/user/logout')
        //console.log(req)
        //req.session.loggedIn = true;
        //req.session.save();
        //res.end()
        //res.setHeader('Content-Type', 'application/json');

        //utils.writeJson(res, response);

        //res.end();
      }).catch(function (response) {
    console.log("Sbagliato")
    utils.writeJson(res, response);
  });
};

module.exports.postUserLogout = function postUserLogout (req, res, next) {
  console.log("Fottuto")
  req.session.loggedIn = true;
  req.session.save()
  res.end()
  //Default.postUserLogout(req.swagger.params, res, next);
};
