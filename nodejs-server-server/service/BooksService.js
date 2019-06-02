'use strict';

var pg = require("../index.js");
var knex = pg.knex;

/**
 * Find books by title
 * Returns a list of books
 *
 * title String title of book to return
 * returns Book
 **/


exports.getBookByTitle = function(title) {
    // query example (returns all books independently by the specified title)
    return new Promise(function (resolve, reject) {

        console.log("---------------executing getBookByTitle---------------------");
        console.log("title: '" + title + "'");
        console.log("------------------------------------------------------------");

        var lowerTitle = toString(title).toLowerCase();
        let myQuery = knex('new_schema.books')
            .leftJoin('new_schema.written_by AS wb', 'new_schema.books.isbn', 'wb.isbn')
            .leftJoin('new_schema.authors AS a', 'wb.author_id', 'a.author_id')
            .select('title', 'name')
            .then(result => {
                resolve(result)
            });
    })
};

/*
SELECT s.StudentID, s.FirstName, s.LastName,
    sd.DonorOrdinal,
    d.DonorType, d.DonorID, d.FirstName, d.LastName
FROM student s
LEFT JOIN student_donor sd ON s.StudentID = sd.StudentID
LEFT JOIN donor d ON sd.DonorID = d.DonorID
ORDER BY s.StudentID, sd.DonorOrdinal, d.DonorID
*/
// knex.raw('select * from "new_schema"."books" where LOWER("title") like ?', '%'+title+'%')
// knex('new_schema.books').select().where( 'title', 'like', '%'+lowerTitle+'%')
// knex.select('*').from('new_schema.books').fullOuterJoin('new_schema.authors')