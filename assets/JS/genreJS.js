//var ip = "https://booktobook.herokuapp.com/";
var ip = "http://localhost:8080/";


//---------------------------------------------------------------------
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
const input = getUrlParameter('genre');


//---------------------------------------------------------------------
//generating the query
//---------------------------------------------------------------------
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        $(document).ready(() => {
            displayFoundGenre(this.responseText);
        });
    }
};
xhttp.open("GET", ip + "api/genre/" + input, true);
xhttp.send();


//---------------------------------------------------------------------
//handling the result
//---------------------------------------------------------------------

var displayFoundGenre = function (genre_list) {

    var parsed = JSON.parse(genre_list);
    console.log("parsed: ", parsed);

    var grouped_by_book = _.groupBy(parsed, 'isbn');

    var name = input;
    var description = parsed[0]['genre_description']

    var books = [];

    for (var i in grouped_by_book) {
        if (i.localeCompare('null')) {
            var book = {
                isbn: grouped_by_book[i][0]['isbn'],
                title: grouped_by_book[i][0]['title'],
                authors: [],
                price: grouped_by_book[i][0]['price']
            };
            var grouped_by_author = _.groupBy(grouped_by_book[i], 'name');

            for (var a in grouped_by_author) {
                var author = {
                    name: a,
                    id: grouped_by_author[a][0].author_id
                }
                book.authors.push(author)
            }
            books.push(book);
        }
    }

    generateGenreDiv(name, description, books);
};

var generateGenreDiv = function (name, bio, books, genres, themes) {

    console.log('GENERATING AUTHOR DIVS')

    var $div1 = $("<div id='row-margin-top' class = 'row margin-top'/>");
    var $div2 = $("<div class = 'row'/>");
    var $col1 = $("<div class = 'col-1'/>");
    var $div3 = $("<div class = 'col-10 singleItemContainer'/>");
    var $div4 = $("<div class = 'col-3 singleItemContainer'/>");
    var $imwrap = $("<div class = 'genreAndThemeImageContainer singleItemImage big-screen-image'/>");
    var $im1 = $("<img />", {
        class: "singleItemImage big-screen-image",
        src: "../assets/Images/GenresImages/" + name + ".jpg"
    });
    var $col2 = $("<div class = 'col-1'/>");
    var $div5 = $("<div class = 'col-8 singleItemContainer'/>");
    var $h1 = $("<h1 class = 'singleItemName'/>");
    $h1.html(name);
    var $div6 = $("<div class = 'row small-screen-image' />");
    var $div7 = $("<div class = 'col-2' />");
    var $div8 = $("<div class = 'col-8' />");
    var $im2 = $("<img />", {class: "singleItemImage", src: "../assets/Images/AuthorPictures/" + name + ".jpg"});
    var $div9 = $("<div class = 'col-2' />");

    var $span1 = $("<span />");
    var $div13 = $("<div class = 'textcontent' />");
    $div13.html(bio);
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
    $div5.append($div6);
    $div6.append($div7);
    $div6.append($div8);
    $div8.append($im2);
    $div6.append($div9);
    $div5.append($span1);
    $div5.append($div13);
    $div5.append($hr1);

    if (books.length > 0) {
        generateBookDiv(books)
    }
};


var generateBookDiv = function (books) {


    $('#homepage-container').append(
        '<div id="suggested-div" class="row suggested-books">'
        + '<h2>Books related to this genre:</h2>'
        + '</div>')

    for (var i in books) {

        var authors = books[i].authors

        author_links = ""

        for (var a of authors) {
            author_links += ', <a href="' + ip + 'pages/author.html?author_id=' + authors[i].id + '">' + a.name + '</a>'
        }


        $('#suggested-div').append(
            '<div class="col-sm singleBook">' +
            '<div class="description">' +
            '<a href="' + ip + 'pages/book.html?isbn=' + books[i].isbn + '">' +
            '<img class="singleItemImage" src="../assets/Images/BookCovers/' + books[i].title + '.jpg">' +
            '<h3>' + books[i].title + '</h3>' +
            '</a>' +
            '<p>' + author_links.substring(1) + '</p>' +
            '</div>' +
            '</div>'
        );
    }
}

