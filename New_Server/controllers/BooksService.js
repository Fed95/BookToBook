'use strict';
var pg = require("../index.js");
var knex = pg.knex;


exports.getBookBestOfTheMonth = function (month) {
    /**
     * parameters expected in the args:
     * month (Date)
     **/
    return new Promise(function (resolve, reject) {

        console.log("---------------executing getBookBestOfTheMonth-----------------");
        console.log("month: '" + month + "'");
        console.log("------------------------------------------------------------");

        let myQuery = knex('new_schema.books as b')
            .join('new_schema.bought_in AS bi', 'b.isbn', 'bi.isbn')
            .join('new_schema.purchases AS p', 'bi.purchase_id', 'p.purchase_id')
            .whereRaw(`EXTRACT(MONTH FROM purchase_date::date) = ?`, [month])
            .leftJoin('new_schema.written_by AS wb', 'b.isbn', 'wb.isbn')
            .leftJoin('new_schema.authors AS a', 'wb.author_id', 'a.author_id')
            .then(result => {
                console.log(result);
                resolve(result)
            });
    });

}

exports.getBookByTitle = function (title) {
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

exports.getBookFavoriteReading = function () {
    /**
     * parameters expected in the args:
     **/
    return new Promise(function (resolve, reject) {

        console.log("---------------executing getBookFavoriteReading-------------");
        console.log("no params expected")
        console.log("------------------------------------------------------------");

        //todo: extend query to get reviews and events

        let myQuery = knex('new_schema.books AS b')
            .join('new_schema.favourites AS f', 'b.isbn', 'f.isbn')
            .leftJoin('new_schema.written_by AS wb', 'b.isbn', 'wb.isbn')
            .leftJoin('new_schema.authors AS a', 'wb.author_id', 'a.author_id')
            .then(result => {
                resolve(result)
            });

    });

};

exports.getBookFindSimilarBooks = function (parameters_string) {
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
        //TODO: CHANGE THESE REQUIREMENTS. this should be called the "get similar books"

    var parameters = parameters_string.split(",");

    return new Promise(function (resolve, reject) {

        console.log("---------------executing getBookFindByGenre-----------------");
        console.log("parameters: '" + parameters + "'");
        console.log("------------------------------------------------------------");

        //todo: extend query to get reviews and events

        let myQuery = knex('new_schema.books AS b')
            .leftJoin('new_schema.book_genres AS bg', 'b.isbn', 'bg.isbn')
            .leftJoin('new_schema.genres AS g', 'bg.book_genre_name', 'g.genre_name')

            .leftJoin('new_schema.book_themes AS bt', 'b.isbn', 'bt.isbn')
            .leftJoin('new_schema.themes AS t', 'bt.book_theme_name', 't.theme_name')

            .innerJoin('new_schema.written_by AS wb', 'b.isbn', 'wb.isbn')
            .innerJoin('new_schema.authors AS a', 'wb.author_id', 'a.author_id')

            .whereIn('genre_name', parameters)
            .orWhereIn('theme_name', parameters)
            .orWhereIn('name', parameters)
            .then(result => {
                resolve(result)
            });
    });

}

exports.getBookISBN = function (isbn) {
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

        //todo: extend query to get reviews and events

        let myQuery = knex('new_schema.books AS b')
            .leftOuterJoin('new_schema.reviews AS r', 'b.isbn', 'r.isbn')
            .leftOuterJoin('new_schema.users AS u', 'r.user_mail', 'u.user_mail')

            .leftJoin('new_schema.book_genres AS bg', 'b.isbn', 'bg.isbn')
            .leftJoin('new_schema.genres AS g', 'bg.book_genre_name', 'g.genre_name')

            .leftJoin('new_schema.book_themes AS bt', 'b.isbn', 'bt.isbn')
            .leftJoin('new_schema.themes AS t', 'bt.book_theme_name', 't.theme_name')

            .leftJoin('new_schema.written_by AS wb', 'b.isbn', 'wb.isbn')
            .leftJoin('new_schema.authors AS a', 'wb.author_id', 'a.author_id')

            .leftJoin('new_schema.interviews AS i', 'b.isbn', 'i.interview_isbn')

            .where('b.isbn', isbn)
            .then(result => {
                resolve(result)
            });

    });

};

