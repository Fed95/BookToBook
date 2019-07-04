//var ip = "https://booktobook.herokuapp.com/";
var ip = "http://localhost:8080/";

// ---------------------------------------------------------------------
//Function used to retrieve user input from the URL
//---------------------------------------------------------------------
var getUrlParameter = function getUrlParameter(sParam) {
    console.log("inside 'getUrlParameter'");
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
};
//---------------------------------------------------------------------
//getting user input
//---------------------------------------------------------------------
const input = getUrlParameter('author_id');


//---------------------------------------------------------------------
//generating the query
//---------------------------------------------------------------------

$.get(ip + "api/author/"+input).done(
    function(response){
        console.log("successful find book by title query")
        displayFoundAuthor(response);
    }
).fail(
    function (response) {
        console.log("Something went wrong while looking for books by title: ", response)
        displayFoundAuthor(response);
    }
);



//---------------------------------------------------------------------
//handling the result
//---------------------------------------------------------------------

var displayFoundAuthor = function(book_list) {

    var grouped_by_book = _.groupBy(book_list, 'isbn');

    console.log('books: ', grouped_by_book);

    var name = book_list[0]['name'];
    var bio = book_list[0]['bio']
    var birth_date = book_list[0]['birth_date'];
    var death_date = book_list[0]['death_date'];

    var books = [];

    for(var i in grouped_by_book){
        var book = {
            isbn: grouped_by_book[i][0]['isbn'],
            title: grouped_by_book[i][0]['title'],
            authors: [],
            price: grouped_by_book[i][0]['price']
        };
        books.push(book);
    }


    generateAuthorDiv(name, bio, birth_date, death_date, books);
};



var generateAuthorDiv = function (name, bio, birth_date, death_date, books) {

    console.log('GENERATING AUTHOR DIVS')

    var $div1 = $("<div id='row-margin-top' class = 'row margin-top'/>");
    var $div2 = $("<div class = 'row'/>");
        var $col1 = $("<div class = 'col-1'/>");
        var $div3 = $("<div class = 'col-10 singleItemContainer'/>");
            var $div4 = $("<div class = 'col-3 singleItemContainer'/>");
                var $imwrap = $("<div class = 'singleItemImage authorImageContainer big-screen-image'/>");
                    var $im1 = $("<img />", { class:"singleItemImage big-screen-image", src:"../assets/Images/AuthorPictures/"+name+".jpg"});
            var $col2 = $("<div class = 'col-1'/>");
            var $div5 = $("<div class = 'col-8 singleItemContainer'/>");
                var $h1 = $("<h1 />"); $h1.html(name);
                var $life_dates = $("<h5 />");
                if(death_date == null){
                    $life_dates.html("Born in: " + birth_date.substring(0, 10));
                }else{
                    $life_dates.html("Lived: " + birth_date.substring(0, 10) + ' to ' + death_date.substring(0, 10));
                }

                var $div6 = $("<div class = 'row small-screen-image' />");
                    var $div7 = $("<div class = 'col-2' />");
                    var $div8 = $("<div class = 'col-8' />");
                        var $im2 = $("<img />", { class:"singleItemImage", src:"../assets/Images/AuthorPictures/"+name+".jpg"});
                    var $div9 = $("<div class = 'col-2' />");

                var $span1 = $("<span />");
                var $div13 = $("<div class = 'textcontent' />"); $div13.html(bio);
                var $hr1 = $("<hr>");


    $("#homepage-container").append($div1);
        $div1.append($div2);
        $div2.append($col1);
        $div2.append($div3);
            $div3.append($div4);
                $div4.append($imwrap);
                    $imwrap.append($im1);
            $div3.append($col2);
            $div3.append($div5);
                $div5.append($h1);
                $div5.append($life_dates);
                $div5.append($div6);
                    $div6.append($div7);
                    $div6.append($div8);
                        $div8.append($im2);
                    $div6.append($div9);
                $div5.append($span1);
                $div5.append($div13);
                $div5.append($hr1);

    if(books.length > 0){
        addSuggestedBooks(books)
    }
};

var addSuggestedBooks = function(books){

    console.log(books)

    $("#row-margin-top").append('<div id="suggested-div" class="row suggested-books">')
    $("#suggested-div").append('<h2>Written by the Author</h2>')

    for (var i in books) {

        $('#suggested-div').append(

            '<div class="col-sm singleBook">' +
            '<div class="description">' +
            '<a href="'+ip+'pages/book.html?isbn='+books[i].isbn+'">'+
            '<img class="singleItemImage" src="../assets/Images/BookCovers/' + books[i].title + '.jpg"/>' +
            '<h3>' + books[i].title + '</h3>' +
            '</a>'+
            '</div>' +
            '</div>'
        );
    }
}


