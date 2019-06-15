var ip = "https://booktobook.herokuapp.com/";
//var ip = "http://localhost:8080/";



//---------------------------------------------------------------------
// Function used to retrieve user input from the URL
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
// getting user input
//---------------------------------------------------------------------
const input = getUrlParameter('search-text');


//---------------------------------------------------------------------
//generating the query
//---------------------------------------------------------------------
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        $(document).ready(() => {
            displayFoundBooks(this.responseText);
        });
    }
};
xhttp.open("GET", ip + "api/book/findByTitle?Title="+input+"&Abstract%20Required=false&Image%20Required=false&Genres%20Required=false&Themes%20Required=false&Authors%20information%20Required=false&Events%20Information%20Required=false", true);
xhttp.send();



//---------------------------------------------------------------------
// handling the result
//---------------------------------------------------------------------

var displayFoundBooks = function(books_list) {

    var parsed = JSON.parse(books_list);
    console.log("parsed: ", parsed);

    var grouped = _.groupBy(parsed, 'isbn');

    for(var isbn in grouped){

        var books = grouped[isbn]; // NOTE: this is a list of tuples of the same book for the different authors

        var title = books[0].title;
        var price = books[0].price;
        var authors = [];

        for(var count in books){
            authors.push(books[count].name);
        }
        var authors_string = authors.join(', ');

        generateBookDiv(isbn, title, authors_string, price)
    }
};





var generateBookDiv = function (isbn, title, authors, price) {

    var $div1 = $("<div />", {class : "list-group-item clearfix"});
        var $div2 = $("<div class = 'row'/>");
            var $div3 = $("<div class = 'col-2 col-2-hidden-xs'>");
                var $div4 = $("<div class = 'book-img'/>");
                    var $im = $("<img />", { src : "../assets/Images/BookCovers/Thumbnails/"+title+".jpg"});
            var $div5 = $("<div class = 'col-8 col-8-bigger-xs'/>");
                var $h = $("<h3 />", {id : 'title', class : 'book-title'});
                var $a5 = $("<a />", {href : ip + 'pages/book.html?isbn='+isbn}); $a5.html(title);
                var $div6 = $("<div class = 'book-info'/>");
                    var $div7 = $("<div class = 'col-4 info'/>");
                        var $s7 = $("<span />"); $s7.html('Authors:');
                        var $p7 = $("<p />"); $p7.html(authors);
                    var $div9 = $("<div class = 'col-5 info'/>");
                        var $s9 = $("<span />"); $s9.html('ISBN:');
                        var $p9 = $("<p />"); $p9.html(isbn);
                    var $div8 = $("<div class = 'col-3 info'/>");
                        var $s8 = $("<span />"); $s8.html('Price:');
                        var $p8 = $("<p />"); $p8.html(price + '$');

            var $div10 = $("<div class = 'col-2 col-2-muchbigger-xs noleft-pad'>");
                var $b10 = $("<button />", {id : 'add-book-btn-1', class : "btn btn-outline-success btn-add-book" , type : "input"});
                $b10.html('Add to Cart')

    var $hr = $('<hr />');


    $("#search-results-container").append($div1);
    $div1.append($div2);
    $div2.append($div3);
    $div3.append($div4);
    $div4.append($im);
    $div2.append($div5);
    $div5.append($h);
    $h.append($a5);
    $div5.append($div6);
    $div6.append($div7);
    $div7.append($s7);
    $div7.append($p7);
    $div6.append($div9);
    $div9.append($s9);
    $div9.append($p9);
    $div6.append($div8);
    $div8.append($s8);
    $div8.append($p8);
    $div2.append($div10);
    $div10.append($b10);
    $("#search-results-container").append($hr);

};