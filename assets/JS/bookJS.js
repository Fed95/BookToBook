var ip = "https://booktobook.herokuapp.com/api";
//var ip = "http://localhost:8080/api";



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

var displayFoundBooks = function(book) {

    var parsed = JSON.parse(book);
    console.log("parsed: ", parsed);

    var grouped_by_author = _.groupBy(parsed, 'name');
    var grouped_by_review = _.groupBy(parsed, 'text');

    var authors = [];
    var reviews = [];

    for(var author in grouped_by_author){
        authors.push(author);
    }

    for(var text in grouped_by_review){

        if(text.localeCompare('null')){
            var review = {
                username: grouped_by_review[text][0].username,
                text: text,
                positive: grouped_by_review[text][0].positive
            };
            reviews.push(review);
        }
    }


    generateBookDiv(parsed[0], authors, reviews);
};





var generateBookDiv = function (book, authors, reviews) {

    console.log(authors);

    var $div1 = $("<div class = 'row margin-top'/>");
    var $div2 = $("<div class = 'row'/>");
        var $col1 = $("<div class = 'col-1'/>");
        var $div3 = $("<div class = 'col-10 singleItemContainer'/>");
            var $div4 = $("<div class = 'col-3 singleItemContainer'/>");
                var $im1 = $("<img />", { class:"singleItemImage big-screen-image", src:"../assets/Images/BookCovers/"+book.title+".jpg"});
            var $col2 = $("<div class = 'col-1'/>");
            var $div5 = $("<div class = 'col-8 singleItemContainer'/>");
                var $h1 = $("<h1 class = 'singleItemName'/>"); $h1.html(book.title);
                var $div6 = $("<div class = 'row small-screen-image' />");
                    var $div7 = $("<div class = 'col-2' />");
                    var $div8 = $("<div class = 'col-8' />");
                        var $im2 = $("<img />", { class:"singleItemImage", src:"../assets/Images/BookCovers/"+book.title+".jpg"});
                    var $div9 = $("<div class = 'col-2' />");
                var $div11 = $("<div class = 'row authorrow' />");

                addAuthors($div11, authors);

                var $span1 = $("<span />");
                var $div13 = $("<div class = 'textcontent' />"); $div13.html(book.abstract);
                var $hr1 = $("<hr>");
                var $div14 = $("<div class = 'col-4 technical' />");
                    var $p1 = $("<p />"); $p1.html("Publisher:");
                    var $p3 = $("<p />"); $p3.html("Edition:");
                    var $p4 = $("<p />"); $p4.html("Language:");
                    var $p5 = $("<p />"); $p5.html("Number of Pages:");
                    var $p6 = $("<p />"); $p6.html("ISBN:");
                var $div14b = $("<div class = 'col-4 technical' />");
                    var $p1b = $("<p />"); $p1b.html(book.publisher);
                    var $p3b = $("<p />"); $p3b.html(book.edition);
                    var $p4b = $("<p />"); $p4b.html(book.language);
                    var $p5b = $("<p />"); $p5b.html(book.number_of_pages);
                    var $p6b = $("<p />"); $p6b.html(book.isbn);
                var $div15 = $("<div class = 'buybook' />");
                    var $div16 = $("<div class = 'col-8' />");  $div16.html("Price: "+book.price+"$");
                    var $div17 = $("<div class = 'col-4' />");
                        var $b1 = $("<button id='add-book-btn-1' class='btn btn-outline-success btn-add-book' type='input'/>");
                        $b1.html("Add to Cart");

        var $hr2 = $("<hr>");




    $("#homepage-container").append($div1);
        $div1.append($div2);
        $div2.append($col1);
        $div2.append($div3);
            $div3.append($div4);
                $div4.append($im1);
            $div3.append($col2);
            $div3.append($div5);
                $div5.append($h1);
                $div5.append($div6);
                    $div6.append($div7);
                    $div6.append($div8);
                        $div8.append($im2);
                    $div6.append($div9);
                $div5.append($div11);
                $div5.append($span1);
                $div5.append($div13);
                $div5.append($hr1);
                $div5.append($div14);
                    $div14.append($p1);
                    $div14.append($p3);
                    $div14.append($p4);
                    $div14.append($p5);
                    $div14.append($p6);
                $div5.append($div14b);
                    $div14b.append($p1b);
                    $div14b.append($p3b);
                    $div14b.append($p4b);
                    $div14b.append($p5b);
                    $div14b.append($p6b);
                $div5.append($div15);
                    $div15.append($div16);
                    $div15.append($div17);
                        $div17.append($b1);
            $div3.append($hr2);

            if(reviews.length > 0){
                addReviews($div3, reviews);
            }
};

var addAuthors = function($div, authors){

    for(var i in authors){

        var $d = $("<div class = 'authorcontainer' />");
        var $a = $("<a href = '' class='authorlink'/>");
        $a.html(authors[i]);
        $d.append($a);
        $div.append($d);

    }
};

var addReviews = function(div, reviews){

    var $div18 = $("<div class = 'col-12'/>");
        var $h2 = $("<h1 />"); $h2.html('Reviews');

    div.append($div18);
    $div18.append($h2);

    console.log("Adding reviews!");
    console.log(reviews);

    for(var i in reviews){

        console.log(i);
        console.log(reviews[i]);

        var im_path = '';

        if(reviews[i].positive){
            im_path  = '../assets/Images/like.png'
        }
        else{
            im_path ='../assets/Images/dislike.png'
        }

        var $d1 = $("<div class = 'row review-row' />");
            var $d2 = $("<div class = 'col-12 review-item' />");
                var $d3 = $("<div class = 'row' />");
                    var $d4 = $("<div class = 'col-11 only-left-pad' />");
                        var $h = $("<h4 class = 'reviewername' />"); $h.html(reviews[i].username);
                    var $d5 = $("<div class = 'col-1 no-pad' />");
                        var $im = $("<img />", { class:"review", src: im_path, width: "25", height: "25"});
                var $hr = $("<hr>");
                var $d6 = $("<div class = 'col-12 review-text' />");
                    var $p = $("<p />"); $p.html(reviews[i].text);

        $div18.append($d1);
        $d1.append($d2);
        $d2.append($d3);
        $d3.append($d4);
        $d4.append($h);
        $d3.append($d5);
        $d5.append($im);
        $d2.append($hr);
        $d2.append($d6);
        $d6.append($p);
    }
};


/*            <div class="row margin-top"></div>
            <div class="row">
                <div class="col-1"></div>
                <div class="col-10 singleItemContainer">
                    <div class="col-3 singleItemContainer">
                        <img class="singleItemImage big-screen-image"
                             src="../assets/Images/BookCovers/game%20of%20thrones.jpg">
                    </div>
                    <div class="col-1 hid"></div>
                    <div class="col-8 singleItemContainer">
                        <h1 class="singleItemName">Game of Thrones</h1>
                        <div class="row small-screen-image">
                            <div class="col-2"></div>
                            <div class="col-8">
                                <img class="singleItemImage" src="../assets/Images/BookCovers/game%20of%20thrones.jpg">
                            </div>
                            <div class="col-2"></div>
                        </div>
                        <div class="row authorrow">
                            <div class="authorcontainer">
                                <a href="" class="authorlink">George R.R. Martin</a>
                            </div>
                            <div class="authorcontainer">
                                <a href="" class="authorlink">Federico Sandrelli</a>
                            </div>
                            <div class="authorcontainer">
                                <a href="" class="authorlink">Filippo Rezzonico</a>
                            </div>
                            <a href="" class="authorlink">Davide Santmabrogio</a>
                        </div>
                        <span></span>
                        <div class="textcontent">It is a long established fact that a reader will be distracted by the
                            readable content
                            of a page when looking at its layout. The point of using Lorem Ipsum is that it has a
                            more-or-less
                            normal
                            distribution of letters, as opposed to using Content.
                            It is a long established fact that a reader will be distracted by the readable content
                            of a page when looking at its layout. The point of using Lorem Ipsum is that it has a
                            more-or-less
                            normal
                            distribution of letters, as opposed to using Content.
                        </div>
                        <hr>
                        <div class="technical">
                            <div><p>Publisher:</p></div>
                            <div><p>Publication Date:</p></div>
                            <div><p>Edition:</p></div>
                            <div><p>Language:</p></div>
                            <div><p>Number of Pages:</p></div>
                            <div><p>ISBN:</p></div>
                        </div>
                        <div class="buybook">
                            <div class="col-8">Price: 22$</div>
                            <div class="col-4">
                                <button id="add-book-btn-1" class="btn btn-outline-success btn-add-book" type="input">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-1 hid"></div>
            </div>
            <hr>
            <div class="col-1"></div>
            <div class="col-10">
                <h1>Reviews</h1>
                <div class="row review-row">
                    <div class="review-item">
                        <div class="row">
                            <div class="col-11 only-left-pad">
                                <h4 class="reviewername">Adam Cadmon</h4>
                            </div>
                            <div class="col-1 no-pad">
                                <img src="../assets/Images/dislike.png" width="25"
                                     height="25" class="review">
                            </div>
                        </div>
                        <hr class="review-line">
                        <div class="col-12 review-text">
                            <p>It is a long established fact that a reader will be distracted by the readable content
                                of a page when looking at its layout. The point of using Lorem Ipsum is that it has a
                                more-or-less
                                normal
                                distribution of letters, as opposed to using Content.
                                It is a long established fact that a reader will be distracted by the readable content
                                of a page when looking at its layout. The point of using Lorem Ipsum is that it has a
                                more-or-less
                                normal
                                distribution of letters, as opposed to using Content.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-1"></div>
            <div class="row margin-bottom"></div>*/