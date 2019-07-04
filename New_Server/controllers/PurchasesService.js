'use strict';
var pg = require("../index.js");
var knex = pg.knex;


exports.getPurchaseFindByUser = function (user_mail) {
    /**
     * parameters expected in the args:
     * userID (Long)
     **/

    return new Promise(function (resolve, reject) {

        console.log("---------------executing getPurchaseFindByUser---------------------");
        console.log("user_mail: '" + user_mail + "'");
        console.log("------------------------------------------------------------");

        let myQuery = knex('new_schema.purchases AS p')
            .innerJoin('new_schema.users AS u', 'p.user_mail', 'u.user_mail')
            .leftOuterJoin('new_schema.bought_in as bought', 'p.purchase_id', 'bought.purchase_id')
            .leftOuterJoin('new_schema.books as b', 'bought.isbn', 'b.isbn')
            .where('u.user_mail', user_mail).andWhere('p.completed', false)
            .innerJoin('new_schema.written_by AS wb', 'b.isbn', 'wb.isbn')
            .innerJoin('new_schema.authors AS a', 'wb.author_id', 'a.author_id')
            .select('b.isbn', 'b.title', 'b.price', 'u.username', 'bought.quantity', 'a.name', 'p.purchase_id', 'u.user_shipping_address')
            .then(result => {
                console.log(result);
                resolve(result)
            });
    });
};


exports.postPurchase = function (isbn, user_mail) {
    /**
     * parameters expected in the args:
     * body (Purchase)
     **/
    return new Promise(function (resolve, reject) {

        console.log("---------------executing postPurchase---------------------");
        console.log("user_mail: '" + user_mail + "'");
        console.log("isbn: '" + isbn + "'");
        console.log("------------------------------------------------------------");

        var purchase_id;

        // check if a purchase not completed (cart) exists
        let myQuery = knex('new_schema.purchases')
            .where({
                user_mail: user_mail,
                completed: false
            })
            .then(result => {
                if (!result || !result[0]) {  // not found!
                    //take the max purchase id
                    return knex("new_schema.purchases")
                        .max('purchase_id')
                        .then(result2 => {

                            let maxPurchaseId = result2[0].max;
                            purchase_id = maxPurchaseId + 1;
                            //create a new purchase not completed (cart)
                            return knex('new_schema.purchases')
                                .insert({purchase_id: purchase_id, user_mail: user_mail})
                                .then(result3 => {
                                    return knex('new_schema.bought_in')
                                        .insert({purchase_id: purchase_id, isbn: isbn})
                                        .then(resultf => {
                                            resolve(result)
                                        })
                                })
                        })


                } else {
                    // purchase not completed (cart) found
                    purchase_id = result[0].purchase_id;
                    // check if the book is already associated to the purchase
                    return knex('new_schema.bought_in')
                        .where({
                            purchase_id: purchase_id,
                            isbn: isbn
                        })
                        .then(result4 => {
                            if (!result4 || !result4[0]) {  // not found!
                                // insert the book in the table book - purchase
                                return knex('new_schema.bought_in')
                                    .insert({purchase_id: purchase_id, isbn: isbn})
                                    .then(resultf => {
                                        resolve(result)
                                    })
                            } else {
                                // the book is already associated
                                // get the quantity of the given book
                                return knex('new_schema.bought_in')
                                    .where({purchase_id: purchase_id, isbn: isbn})
                                    .select('quantity')
                                    .then(result5 => {
                                        // update the quantity of the quantity
                                        let quantity = result5[0].quantity;
                                        return knex('new_schema.bought_in')
                                            .where({purchase_id: purchase_id, isbn: isbn})
                                            .update('quantity', quantity + 1)
                                            .then(resultf => {
                                                resolve(result)

                                            })

                                    })


                            }
                        })

                }

            });
    });


};

exports.postPurchaseCompleted = function (purchase_id) {
    /**
     * parameters expected in the args:
     * date (Date)
     **/
    return new Promise(function (resolve, reject) {

        console.log("---------------executing postPurchaseCompleted---------------------");
        console.log("purchase_id: '" + purchase_id + "'");
        console.log("------------------------------------------------------------");

        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();

        today = dd + '/' + mm + '/' + yyyy;

        let myQuery = knex('new_schema.purchases')
            .where({purchase_id: purchase_id})
            .update({completed: true, purchase_date: today})
            .then(result => {
                console.log(result)
                resolve(result)
            })
    })
}


exports.postPurchaseBook = function (purchase_id, isbn, quantity) {
    /**
     * parameters expected in the args:
     * purchaseID (String)
     * iSBN (Long)
     **/

    return new Promise(function (resolve, reject) {

        return new Promise(function (resolve, reject) {

            console.log("---------------executing postPurchaseBook---------------------");
            console.log("purchase_id: '" + purchase_id + "'");
            console.log("isbn: '" + isbn + "'");
            console.log("quantity: '" + quantity + "'");
            console.log("------------------------------------------------------------");

            if (quantity === 0) {
                return knex('new_schema.bought_in')
                    .where({purchase_id: purchase_id, isbn: isbn})
                    .del()
                    .then(result => {
                        resolve(result)
                    })
            } else {
                return knex('new_schema.bought_in')
                    .where({purchase_id: purchase_id, isbn: isbn})
                    .update('quantity', quantity)
                    .then(result => {
                        resolve(result)

                    })
            }

        })
    })
}

exports.deletePurchaseBook = function (purchase_id, isbn) {
    /**
     * parameters expected in the args:
     * purchaseID (String)
     * iSBN (Long)
     **/

    return new Promise(function (resolve, reject) {

        console.log("---------------executing deletePurchaseBook---------------------");
        console.log("purchase_id: '" + purchase_id + "'");
        console.log("isbn: '" + isbn + "'");
        console.log("------------------------------------------------------------");

        let myQuery = knex('new_schema.bought_in')
            .where({purchase_id: purchase_id, isbn: isbn})
            .del()
            .then(result => {
                resolve(result)
            })
    })

};

