'use strict';
var pg = require("../index.js");
var knex = pg.knex;


exports.getAuthorAuthorID = function (author_id) {
    /**
     * parameters expected in the args:
     * authorID (String)
     **/
    return new Promise(function (resolve, reject) {

        console.log("---------------executing getAuthorAuthorID-----------------------");
        console.log("author_id: '" + author_id + "'");
        console.log("-----------------------------------------------------------------");

        let myQuery = knex('new_schema.books AS b')
            .innerJoin('new_schema.written_by AS wb', 'b.isbn', 'wb.isbn')
            .innerJoin('new_schema.authors AS a', 'wb.author_id', 'a.author_id')

            .where('a.author_id', author_id)
            .then(result => {
                resolve(result)
            });
    });

}

exports.getAuthorFindByBook = function (isbn) {
    /**
     * parameters expected in the args:
     * iSBN (Long)
     **/
    return new Promise(function (resolve, reject) {

        console.log("---------------executing getAuthorFindByBook---------------------");
        console.log("isbn: '" + isbn + "'");
        console.log("-----------------------------------------------------------------");

        let myQuery = knex('new_schema.authors AS a')
            .join('new_schema.written_by AS wb', 'a.author_id', 'wb.author_id')
            .where('wb.isbn', isbn)
            .select('a.name', 'wb.isbn')
            .then(result => {
                console.log("hello");
                console.log(result);
                resolve(result)
            });

    });

};

exports.getAuthorFindByName = function (name) {
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
                resolve(result)
            });

    });


};

