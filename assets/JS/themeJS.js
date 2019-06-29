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
const input = getUrlParameter('theme');


//---------------------------------------------------------------------
//generating the query
//---------------------------------------------------------------------
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        $(document).ready(() => {
            displayFoundtheme(this.responseText);
        });
    }
};
xhttp.open("GET", ip + "api/theme/"+input, true);
xhttp.send();



//---------------------------------------------------------------------
//handling the result
//---------------------------------------------------------------------

var displayFoundtheme = function(theme_list) {

    var parsed = JSON.parse(theme_list);
    console.log("parsed: ", parsed);

    var grouped_by_book = _.groupBy(parsed, 'isbn');

    console.log('books: ', grouped_by_book);

    var name = input;
    var description = parsed[0]['theme_description']

    var books = [];

    for(var i in grouped_by_book){
        if(i.localeCompare('null')) {
            var book = {
                isbn: grouped_by_book[i][0]['isbn'],
                title: grouped_by_book[i][0]['title'],
                authors: [],
                price: grouped_by_book[i][0]['price']
            };
            books.push(book);
        }
    }

    generateThemeDiv(name, description, books);
};

var generateThemeDiv = function (name, description, books) {

    console.log('GENERATING AUTHOR DIVS')

    var $div1 = $("<div id='row-margin-top' class = 'row margin-top'/>");
    var $div2 = $("<div class = 'row'/>");
    var $col1 = $("<div class = 'col-1'/>");
    var $div3 = $("<div class = 'col-10 singleItemContainer'/>");
    var $div4 = $("<div class = 'col-3 singleItemContainer'/>");
    var $imwrap = $("<div class = 'themeAndThemeImageContainer singleItemImage big-screen-image'/>");
    var $im1 = $("<img />", { class:"singleItemImage big-screen-image", src:"../assets/Images/ThemesImages/"+name+".jpg"});
    var $col2 = $("<div class = 'col-1'/>");
    var $div5 = $("<div class = 'col-8 singleItemContainer'/>");
    var $h1 = $("<h1 class = 'singleItemName'/>"); $h1.html(name);
    var $div6 = $("<div class = 'row small-screen-image' />");
    var $div7 = $("<div class = 'col-2' />");
    var $div8 = $("<div class = 'col-8' />");
    var $im2 = $("<img />", { class:"singleItemImage", src:"../assets/Images/ThemesImages/"+name+".jpg"});
    var $div9 = $("<div class = 'col-2' />");

    var $span1 = $("<span />");
    var $div13 = $("<div class = 'textcontent' />"); $div13.html(description);
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

    if(books.length > 0){

        var $d1 = $("<div class = 'row' />");
        var $d2 = $("<div class = 'col-1' />");
        var $d3 = $("<div class = 'col-10' />");
        var $d4 = $("<div class = 'col-1' />");
        var $hbook = $("<h3 />"); $hbook.html('Books related to this theme:');

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