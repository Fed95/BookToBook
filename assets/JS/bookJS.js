//var ip = "https://booktobook.herokuapp.com/api";
var ip = "http://localhost:8080/api";



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
const input = getUrlParameter('isbn');


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
xhttp.open("GET", ip + "/book/"+input, true);
xhttp.send();



//---------------------------------------------------------------------
//handling the result
//---------------------------------------------------------------------

var displayFoundBooks = function(books_list) {

    var parsed = JSON.parse(books_list);
    //console.log("parsed: ", parsed[0]);
    generateBookDiv(parsed);

    var authors = [];
    var genres = [];
    var reviews = [];


    for(var index in parsed){
        authors.push(parsed[index]['author']);
        genres.push(parsed[index]['genres']);
        reviews.push(parsed[index]['reviews']);
    }
};





var generateBookDiv = function (title, authors, price) {

    var $div1 = $("<div />", {class : "list-group-item clearfix"});
    var $div2 = $("<div class = 'row'/>");
    var $div3 = $("<div class = 'col-2 col-2-hidden-xs'>");
    var $div4 = $("<div class = 'book-img'/>");
    var $im = $("<img />", { src : "../assets/Images/BookCovers/Thumbnails/The BFG.jpg"});
    var $div5 = $("<div class = 'col-8 col-8-bigger-xs'/>");
    var $h = $("<h3 />", {id : 'title', class : 'book-title'}); $h.html(title);
    var $div6 = $("<div class = 'book-info'/>");
    var $div7 = $("<div class = 'col-3 info'/>");
    var $s7 = $("<span />"); $s7.html('Authors:');
    var $p7 = $("<p />"); $p7.html(authors);
    var $space = $("<div class = 'col-0.5'/>");
    var $div8 = $("<div class = 'col-3 info'/>");
    var $s8 = $("<span />"); $s8.html('Price:');
    var $p8 = $("<p />"); $p8.html(price + '$');
    var $div9 = $("<div class = 'col-2 col-2-muchbigger-xs noleft-pad'>");
    var $b9 = $("<button />", {id : 'add-book-btn-1', class : "btn btn-outline-success btn-add-book" , type : "input"});
    $b9.html('Add to Cart')


    $("#search-results-container").append($div1);
    $div1.append($div2);
    $div2.append($div3);
    $div3.append($div4);
    $div4.append($im);
    $div2.append($div5);
    $div5.append($h);
    $div5.append($div6);
    $div6.append($div7);
    $div7.append($s7);
    $div7.append($p7);
    $div6.append($space);
    $div6.append($div8);
    $div8.append($s8);
    $div8.append($p8);
    $div2.append($div9);
    $div9.append($b9);

};


