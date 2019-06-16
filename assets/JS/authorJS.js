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
const input = getUrlParameter('author_id');


//---------------------------------------------------------------------
//generating the query
//---------------------------------------------------------------------
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        $(document).ready(() => {
            displayFoundAuthor(this.responseText);
        });
    }
};
xhttp.open("GET", ip + "api/author/"+input, true);
xhttp.send();



//---------------------------------------------------------------------
//handling the result
//---------------------------------------------------------------------

var displayFoundAuthor = function(book_list) {

    var parsed = JSON.parse(book_list);
    console.log("parsed: ", parsed);

    var grouped_by_genre = _.groupBy(parsed, 'genre_name');
    var grouped_by_theme = _.groupBy(parsed, 'theme_name');
    var grouped_by_book = _.groupBy(parsed, 'isbn');

    console.log('books: ', grouped_by_book);
    console.log('genres: ', grouped_by_genre);
    console.log('thmes: ', grouped_by_theme);

    var name = parsed[0]['name'];
    var bio = parsed[0]['bio']
    var genres = [];
    var themes = [];

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
    for(var g in grouped_by_genre){
        if(g.localeCompare('null')) {
            var genre = {
                name: grouped_by_genre[g][0].genre_name,
                color: grouped_by_genre[g][0].genre_color,
            };
        }

        genres.push(genre);
    }
    for(var t in grouped_by_theme){

        if(t.localeCompare('null')) {
            var theme = {
                name: grouped_by_theme[t][0].theme_name,
                color: grouped_by_theme[t][0].theme_name,
            };
        }

        themes.push(theme);
    }

    generateAuthorDiv(name, bio, books, genres, themes);
};

var xhttpAuthors = new XMLHttpRequest();
xhttpAuthors.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        $(document).ready(() => {
            addAuthors(this.responseText)
        });
    }
};

var addAuthors = function(author_list){

    var parsed = JSON.parse(author_list);
    console.log("parsed authors: ", parsed);

    var isbn_string = '#'+ parsed[0]['isbn'];



    var authors = [];
    for(var i in parsed){
        authors.push(parsed[i]['name'])
    }
    var authors_string = authors.join(', ');

    console.log('authors for ' + isbn_string);
    console.log(authors_string);

    $(isbn_string).html(authors_string)
};


var generateAuthorDiv = function (name, bio, books, genres, themes) {

    console.log('GENERATING AUTHOR DIVS')

    var $div1 = $("<div id='row-margin-top' class = 'row margin-top'/>");
    var $div2 = $("<div class = 'row'/>");
        var $col1 = $("<div class = 'col-1'/>");
        var $div3 = $("<div class = 'col-10 singleItemContainer'/>");
            var $div4 = $("<div class = 'col-3 singleItemContainer'/>");
                var $imwrap = $("<div class = 'authorImageContainer singleItemImage big-screen-image'/>");
                    var $im1 = $("<img />", { class:"singleItemImage big-screen-image", src:"../assets/Images/AuthorPictures/"+name+".jpg"});
            var $col2 = $("<div class = 'col-1'/>");
            var $div5 = $("<div class = 'col-8 singleItemContainer'/>");
                var $h1 = $("<h1 class = 'singleItemName'/>"); $h1.html(name);
                var $div6 = $("<div class = 'row small-screen-image' />");
                    var $div7 = $("<div class = 'col-2' />");
                    var $div8 = $("<div class = 'col-8' />");
                        var $im2 = $("<img />", { class:"singleItemImage", src:"../assets/Images/AuthorPictures/"+name+".jpg"});
                    var $div9 = $("<div class = 'col-2' />");

                var $span1 = $("<span />");
                var $div13 = $("<div class = 'textcontent' />"); $div13.html(bio);
                var $hr1 = $("<hr>");

                var $genres = $("<div class ='row genres'/>");

                addGenresAndThemes($genres, genres, themes);



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
                $div5.append($genres);

    if(books.length > 0){

        var $d1 = $("<div class = 'row' />");
        var $d2 = $("<div class = 'col-1' />");
        var $d3 = $("<div class = 'col-10' />");
        var $d4 = $("<div class = 'col-1' />");
        var $hbook = $("<h3 />"); $hbook.html('Books');

        $("#row-margin-top").append($d1);
        $d1.append($d2);
        $d1.append($d3);
        $d3.append($hbook);
        $d1.append($d4);

        for(var i in books){
            generateBookDiv(books[i]);
        }
    }
};

var generateBookDiv = function (book) {

    console.log('GENERATING BOOK DIVS')

    var $diva = $("<div class='row'/>");
        var $divb = $("<div class='col-1 hidden-s'/>");
        var $divc = $("<div class='col-10 col-10-bigger-s'/>");
            var $div1 = $("<div class = 'list-group-item' />");
                var $div2 = $("<div class = 'row list-group-item'/>");
                    var $div3 = $("<div class = 'col-2 col-2-hidden-xs'>");
                        var $div4 = $("<div class = 'book-img'/>");
                            var $im = $("<img />", { src : "../assets/Images/BookCovers/Thumbnails/"+book.title+".jpg"});
                    var $div5 = $("<div class = 'col-8 col-8-bigger-xs'/>");
                        var $h = $("<h3 />", {id : 'title', class : 'book-title'});
                            var $a5 = $("<a />", {href : ip + 'pages/book.html?isbn='+book.isbn}); $a5.html(book.title);
                        var $div6 = $("<div class = 'book-info'/>");
                        /*
                            var $div7 = $("<div class = 'col-5 info'/>");
                                var $s7 = $("<span />"); $s7.html('Authors:');
                                var $p7 = $("<p />", {id: book.isbn});


                            var $div8 = $("<div class = 'col-5 info'/>");
                                var $s8 = $("<span />"); $s8.html('Price:');
                                var $p8 = $("<p />"); $p8.html(book.price + '$');

                    var $div10 = $("<div class = 'col-2 col-2-muchbigger-xs noleft-pad'>");
                        var $b10 = $("<button />", {id : 'add-book-btn-1', class : "btn btn-outline-success btn-add-book" , type : "input"});
                            $b10.html('Add to Cart')
                            */

    $("#row-margin-top").append($diva);
    $diva.append($divb);
    $diva.append($divc);
    $divc.append($div1);
    $div1.append($div2);
    $div2.append($div3);
    $div3.append($div4);
    $div4.append($im);
    $div2.append($div5);
    $div5.append($h);
    $h.append($a5);
    $div5.append($div6);
    /*
    $div6.append($div7);
    $div7.append($s7);
    $div7.append($p7);


    $div6.append($div8);
    $div8.append($s8);
    $div8.append($p8);
    $div2.append($div10);
    $div10.append($b10);
*/
    console.log('looking for author of ' + book.title);

    //todo: need to generate a new request each time to prevent overlap of gets
    //xhttpAuthors.open("GET", ip + "api/author/findByBook?ISBN="+book.isbn, true);
    //xhttpAuthors.send();

};
var addGenresAndThemes = function(div, genres, themes){

    console.log('Adding Genres!');
    console.log('genres: ', genres);

    if(typeof genres[0] !== 'undefined') {

        var $g = $("<a />", {id: 'start'});
        $g.html('Genres:');
        div.append($g);

        for (var g in genres) {
            $g = $("<a />", {id:genres[g].name, href: ip + 'pages/genre.html?theme='+genres[g].name});
            $g.html(genres[g].name);
            div.append($g);

            /*
            window.onload = function () {
                var el = document.getElementById(genres[g].name);
                console.log(el);
                el.style.backgroundColor = genres[g].color;
                console.log("done")
            }

             */
        }
    }
    if(typeof themes[0] !== 'undefined') {

        var $t = $("<a />", {id: 'start'});
        $t.html('Themes:');
        div.append($t);

        for (var t in themes) {
            $t = $("<a />", {id: themes[t].name, href: ip + 'pages/theme.html?theme='+themes[t].name});
            $t.html(themes[t].name);
            div.append($t);
        }
    }
};


/*<div class="row margin-top"></div>
                    <div class="row">
                        <div class="col-1"></div>
                        <div class="col-10 singleItemContainer">
                            <div class="col-3 singleItemContainer">
                                <img class="singleItemImage big-screen-image" src="../assets/Images/AuthorPictures/Michael%20Crichton.jpg">
                            </div>
                            <div class="col-1 hid"></div>
                            <div class=" col-8 singleItemContainer">
                                <h1 class="singleItemName">Michael Crichton</h1>
                                <div class="row small-screen-image">
                                    <div class="col-2"></div>
                                    <div class="col-8">
                                        <img class="singleItemImage" src="../assets/Images/AuthorPictures/Michael%20Crichton.jpg">
                                    </div>
                                    <div class="col-2"></div>
                                </div>
                                <div class="row">
                                    <p class="datestyle">23/10/1942 - 4/11/2008</p>
                                </div>
                                <div class="textcontent">It is a long established fact that a reader will be distracted by the readable content
                                    of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less
                                    normal
                                    distribution of letters, as opposed to using Content.
                                    It is a long established fact that a reader will be distracted by the readable content
                                    of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less
                                    normal
                                    distribution of letters, as opposed to using Content.
                                </div>
                                <hr>
                            </div>
                        </div>
                        <div class="col-1 hid"></div>
                    </div>
                    <div class="row">
                        <div class="col-1"></div>
                        <div class="col-10"><h3>Books</h3></div>
                        <div class="col-1"></div>
                    </div>
                    <div class="row">
                        <div class="col-1 hidden-s"></div>
                        <div class="col-10 col-10-bigger-s">
                            <div class="list-group-item clearfix">
                                <div class="row">
                                    <div class="col-2 col-2-hidden-xs">
                                        <div class="book-img"><img src="../assets/Images/BookCovers/Thumbnails/Prey.jpg"></div>
                                    </div>
                                    <div class="col-8 col-8-bigger-xs">
                                        <h3 id="title" class="book-title">Prey</h3>
                                        <div class="book-info">
                                            <div class="col-5 info">
                                                <span>Authors:</span>
                                                <p>Filippo Rezzonico</p>
                                                <p>Michael Crichton</p>
                                            </div>
                                            <div class="col-5 info">
                                                <span>Price:</span>
                                                <p>3000$</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-2 col-2-muchbigger-xs noleft-pad">
                                    <button id="add-book-btn-1" class="btn btn-outline-success btn-add-book" type="input">Add to Cart</button>
                                    </div>
                                </div>
                        </div>
                        <div class="col-1 hidden-s"></div>
                    </div>

                    <div class="row margin-bottom"></div>*/