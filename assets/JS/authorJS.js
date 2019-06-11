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

var displayFoundAuthor = function(author) {

    var parsed = JSON.parse(author)[0];
    console.log("parsed: ", parsed);

    var name = parsed['name'];
    var bio = parsed['bio'];

    generateBookDiv(name, bio);
};





var generateBookDiv = function (name, bio) {

    var $div1 = $("<div class = 'row margin-top'/>");
    var $div2 = $("<div class = 'row'/>");
        var $col1 = $("<div class = 'col-1'/>");
        var $div3 = $("<div class = 'col-10 singleItemContainer'/>");
            var $div4 = $("<div class = 'col-3 singleItemContainer'/>");
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
                $div5.append($span1);
                $div5.append($div13);
                $div5.append($hr1);
            $div3.append($hr2);
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
                            </div><div class="list-group-item clearfix">
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
                        </div>
                        <div class="col-1 hidden-s"></div>
                    </div>

                    <div class="row margin-bottom"></div>*/