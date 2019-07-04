var ip = "https://booktobook.herokuapp.com/";
//var ip = "http://localhost:8080/";

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
const input = getUrlParameter('search-text');


//---------------------------------------------------------------------
//generating the query
//---------------------------------------------------------------------
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        $(document).ready(() => {
            displayFoundAuthors(this.responseText);
        });
    }
};
xhttp.open("GET", ip + "api/author/findByName?name=" + input, true);
xhttp.send();

//Adding last search in search bar
$(document).ready(() => {
    $('#searchbar-input').val(input)
})


//---------------------------------------------------------------------
//handling the result
//---------------------------------------------------------------------

var displayFoundAuthors = function(authors_list) {

    var parsed = JSON.parse(authors_list);
    console.log("parsed: ", parsed);

    if(parsed.length > 0) {

        var grouped = _.groupBy(parsed, 'author_id');
        console.log("grouped: ", grouped);

        var authors = [];

        for (var a in grouped) {
            var author = {
                name: grouped[a][0].name,
                author_id: grouped[a][0].author_id
            };
            authors.push(author)
        }

        authors.sort(function (a, b) {
            console.log(a.name, b.name, a.name > b.name)
            if (a.name < b.name) {
                return -1
            } else if (a.name > b.name) {
                return 1
            } else {
                return 0
            }
        });
        console.log("authors: ", authors)

        for (var author of authors) {
            generateAuthorDiv(author.name, author.author_id)
        }
    }else {
        $("#search-results-container").append('<div class="col-12 no-result">No authors were found for "' + input + '".</div>')
    }
};


var generateAuthorDiv = function (name, author_id) {

    var $div1 = $("<div />", {class : "list-group-item clearfix"});
    var $div2 = $("<div class = 'row'/>");
    var $div3 = $("<div class = 'author-picture col-4 col-2-hidden-xs'>");
    var $div4 = $("<div class = 'book-img'/>");
    var $im = $("<img />", { src : "../assets/Images/AuthorPictures/Thumbnails/"+name+".jpg"});
    var $div5 = $("<div class = 'author-name col-8 col-8-bigger-xs'/>");
    var $h = $("<h3 />", {id : 'title', class : 'book-title'});
    var $a = $("<a />", {href : ip + 'pages/author.html?author_id='+author_id}); $a.html(name);
    var $div6 = $("<div class = 'book-info'/>");
    var $div7 = $("<div class = 'info'/>");
    var $hr = $('<hr />');


    $("#search-results-container").append($div1);
    $div1.append($div2);
    $div2.append($div3);
    $div3.append($div4);
    $div4.append($im);
    $div2.append($div5);
    $div5.append($h);
    $h.append($a);
    $div5.append($div6);
    $div6.append($div7);
    $("#search-results-container").append($hr);

};







//---------------------------------------------------------------------
//this is the structure of the book div
//---------------------------------------------------------------------
/*

1<div id="example-book-div" class="list-group-item clearfix">
   2 <div class="row">
       3 <div class="col-2 col-2-hidden-xs">
           4 <div class="book-img"><img src="../assets/Images/game of thrones.jpg"/></div>
        </div>

      5  <div class="col-8 col-8-bigger-xs">
            <h3 class="book-title">Game of Thrones</h3>
           6 <div class="book-info">
              7  <div class="info"><span class="">Info:</span> Something here</div>
              8  <div class="info"><span class="">Info:</span> Something here</div>
            </div>
        </div>
      9  <div class="col-2 col-2-muchbigger-xs noleft-pad">
            <button id="add-book-btn-1" class="btn btn-outline-success btn-add-book" type="input">Add to Cart</button>
        </div>
    </div>
</div><!-- item -->
*/