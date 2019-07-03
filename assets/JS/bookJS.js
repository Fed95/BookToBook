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
const input = getUrlParameter('isbn');


//---------------------------------------------------------------------
//generating the queries and starting the first one
//---------------------------------------------------------------------
var xhttpBook = new XMLHttpRequest();
xhttpBook.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        $(document).ready(() => {
            displayFoundBooks(this.responseText);
        });
    }
};
var xhttpEvents = new XMLHttpRequest();
xhttpEvents.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        $(document).ready(() => {
            addEvents(JSON.parse(this.responseText));
        });
    }
};
var xhttpSimilar = new XMLHttpRequest();
xhttpSimilar.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        $(document).ready(() => {
            addSuggestedBooks(JSON.parse(this.responseText));
        });
    }
};

xhttpBook.open("GET", ip + "api/book/" + input, true);
xhttpBook.send();




//---------------------------------------------------------------------
//handling the result
//---------------------------------------------------------------------

var displayFoundBooks = function (book) {

    var parsed = JSON.parse(book);
    console.log("parsed: ", parsed);

    var grouped_by_author = _.groupBy(parsed, 'name');
    var grouped_by_review = _.groupBy(parsed, 'text');
    var grouped_by_genre = _.groupBy(parsed, 'genre_name');
    var grouped_by_theme = _.groupBy(parsed, 'theme_name');

    console.log("grouped by author: ", grouped_by_author)

    var authors = [];
    var reviews = [];
    var genres = [];
    var themes = [];
    var similar = "";

    var interview = parsed[0].interview_text // TODO: DECIDE WHETHER THE INTERVIEW SHOULD BE AUTHOR SPECIFIC

    for(var author_name in grouped_by_author){
        var author = {
            name : author_name,
            id : grouped_by_author[author_name][0].author_id
        }
        authors.push(author);
        similar = similar + ',' + String(author.name)
    }

    for (var text in grouped_by_review) {

        if (text.localeCompare('null')) {
            var review = {
                username: grouped_by_review[text][0].username,
                text: text,
                positive: grouped_by_review[text][0].positive
            };
            console.log()
            reviews.push(review);
        }
    }
    for (var g in grouped_by_genre) {
        if (g.localeCompare('null')) {
            var genre = {
                name: grouped_by_genre[g][0].genre_name,
                color: grouped_by_genre[g][0].genre_color,
            };

            genres.push(genre);
            similar = similar + ',' + String(genre.name)
        }
    }
    for (var t in grouped_by_theme) {

        if (t.localeCompare('null')) {
            var theme = {
                name: grouped_by_theme[t][0].theme_name,
                color: grouped_by_theme[t][0].theme_name,
            };

            themes.push(theme);
            similar = similar + ',' + String(theme.name)
        }
    }




    generateBookDiv(parsed[0], authors, interview, reviews, genres, themes);

    xhttpEvents.open("GET", ip + "api/event/findByBook?ISBN=" + input, true);
    xhttpEvents.send();

    xhttpSimilar.open("GET", ip + "api/book/findByGenre?genre=" + similar.substring(1), true);
    xhttpSimilar.send();
};


var generateBookDiv = function (book, authors, interview, reviews, genres, themes) {

    console.log(authors);

    var $div1 = $("<div class = 'row margin-top'/>");
    var $div2 = $("<div class = 'row'/>");
    var $col1 = $("<div class = 'col-1'/>");
    var $div3 = $("<div class = 'col-10 singleItemContainer'/>");
    var $div4 = $("<div class = 'col-3 singleItemContainer'/>");
    var $imwrap = $("<div class = 'singleItemImage bookCoverContainer  big-screen-image'/>");
    var $im1 = $("<img />", {
        class: "singleItemImage big-screen-image",
        src: "../assets/Images/BookCovers/" + book.title + ".jpg"
    });
    var $col2 = $("<div class = 'col-1 hidden-col-s'/>");
    var $div5 = $("<div class = 'col-8 singleItemContainer'/>");
    var $h1 = $("<h1 class = 'singleItemName'/>");
    $h1.html(book.title);
    var $div6 = $("<div class = 'row small-screen-image' />");
    var $div7 = $("<div class = 'col-2' />");
    var $div8 = $("<div class = 'col-8 bookCoverContainer' />");
    var $im2 = $("<img />", {class: "singleItemImage", src: "../assets/Images/BookCovers/" + book.title + ".jpg"});
    var $div9 = $("<div class = 'col-2' />");
    var $div11 = $("<div class = 'row authorrow' />");

    addAuthors($div11, authors);

    var $span1 = $("<span />");
    var $div13 = $("<div class = 'textcontent' />");
    $div13.html(book.abstract);
    var $hr1 = $("<hr>");
    var $techrow = $("<div class='row'/>");
    var $div14 = $("<div class = 'col-4 technical' />");
    var $p1 = $("<p />");
    $p1.html("Publisher:");
    var $p3 = $("<p />");
    $p3.html("Edition:");
    var $p4 = $("<p />");
    $p4.html("Language:");
    var $p5 = $("<p />");
    $p5.html("Number of Pages:");
    var $p6 = $("<p />");
    $p6.html("ISBN:");
    var $div14b = $("<div class = 'col-8 technical' />");
    var $p1b = $("<p />");
    $p1b.html(book.publisher);
    var $p3b = $("<p />");
    $p3b.html(book.edition);
    var $p4b = $("<p />");
    $p4b.html(book.language);
    var $p5b = $("<p />");
    $p5b.html(book.number_of_pages);
    var $p6b = $("<p class='isbn'/>");
    $p6b.html(book.isbn);
    var $hr2 = $("<hr >");
    var $genres = $("<div class ='row genres'/>");

    addGenresAndThemes($genres, genres, themes);


    var $div15 = $("<div class = 'buybook' />");
    var $div16 = $("<div class = 'col-8' />");
    $div16.html("Price: $ " + book.price);
    var $div17 = $("<div class = 'col-4' />");
    var $b1 = $("<button id='add-book-btn-1' class='btn btn-outline-success btn-add-book' type='input'/>");
    $b1.html("Add to Cart");


    $("#book-div").append($div1);
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
    $div5.append($div11);
    $div5.append($span1);
    $div5.append($div13);
    $div5.append($hr1);
    $div5.append($techrow);
    $techrow.append($div14);
    $div14.append($p1);
    $div14.append($p3);
    $div14.append($p4);
    $div14.append($p5);
    $div14.append($p6);
    $techrow.append($div14b);
    $div14b.append($p1b);
    $div14b.append($p3b);
    $div14b.append($p4b);
    $div14b.append($p5b);
    $div14b.append($p6b);
    $div5.append($hr2);
    $div5.append($genres);
    $div5.append($div15);
    $div15.append($div16);
    $div15.append($div17);
    $div17.append($b1);

    addReviewsAndInterview(reviews, interview);
};

var addAuthors = function ($div, authors) {

    for (var i in authors) {

        var $d = $("<div class = 'authorcontainer' />");
        var $a = $("<a href = '"+ip+"pages/author.html?author_id="+authors[i].id+"' class='authorlink'/>");
        $a.html(authors[i].name);
        $d.append($a);
        $div.append($d);

    }
};
var addReviewsAndInterview = function (reviews, interview) {

    console.log('interview: ', interview)

    $('#reviews-div').append('<div id="revs" class="content" />');

    if(interview != null){
        $('#interview-div').append('<div id="interview" class="content">'
            +'<p class="col-12 review-item">'+interview+'</p>'
            + '</div>')
    }else{
        $('#interview-div').append('<div id="interview" class="content">'
            +'<p class="col-12 review-item">We didn\'t get a chance to interview with the author for now. Hopefully we will soon!</p>'
            + '</div>')
    }

    if(reviews.length < 1){
        $('#revs').append('<p class="col-12 review-item">There are no reviews for this book yet.</p>')
    }else{
        for (var i in reviews) {

        var im_path = '';

        if (reviews[i].positive) {
            im_path = '../assets/Images/like.png'
        } else {
            im_path = '../assets/Images/dislike.png'
        }

        $('#revs').append(
            '<div class = "row review-row">'
            + '<div class = "col-12 review-item">'
            + '<div class = "row">'
            + '<div class = "col-11 only-left-pad">'
            + '<h4 class = "reviewername">' + reviews[i].username + '</h4>'
            + '</div>'
            + '<div class = "col-1 no-pad">'
            + '<img class="review" src="'+ im_path +'" width="20" height="20"/>'
            + '</div>'
            + '<hr/>'
            + '</div>'
            + '<div class = "col-12 review-text" >'
            + '<p>' + reviews[i].text + '</p>'
            + '</div>'
            + '</div>'
            + '</div>'
        )
    }}



};

var addGenresAndThemes = function (div, genres, themes) {

    console.log('Adding Genres!');
    console.log('genres: ', genres);

    if (typeof genres[0] !== 'undefined') {

        var $g = $("<a />", {id: 'start'});
        $g.html('Genres:');
        div.append($g);

        for (var g in genres) {
            $g = $("<a />", {id: genres[g].name, href: ip + 'pages/genre.html?genre=' + genres[g].name});
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
    if (typeof themes[0] !== 'undefined') {

        var $t = $("<a />", {id: 'start'});
        $t.html('Themes:');
        div.append($t);

        for (var t in themes) {
            $t = $("<a />", {id: themes[t].name, href: ip + 'pages/theme.html?theme=' + themes[t].name});
            $t.html(themes[t].name);
            div.append($t);
        }
    }
};

var addEvents = function(events){

    $('#events-div').append('<div id="events" class="content" />');

    if(events.length < 1) {
        $('#events').append('<p class="col-12 review-item">There are no events related to this book.</p>')
    }else {
        for(var e of events){
        $('#events').append(
            '<div class = "row review-row">'
            + '<div class = "col-12 review-item">'
            + '<div class = "row">'
            + '<div class = "col-11 only-left-pad">'
            +'<a href="'+ip+'pages/event.html?event_id='+e.event_id+'">'
            + '<h3 >' + e.event_name + '</h3>'
            +'</a>'
            + '</div>'
            + '<div class = "col-11 only-left-pad">'
            + '<h5 >' + e.event_date.substr(0, 10) + '</h5>'
            + '</div>'
            + '</div>'
            + '<div class = "col-12 review-text" >'
            + '<p>' + e.summary + '</p>'
            + '</div>'
            + '</div>'
            + '</div>'
        )
    }}
};

var addSuggestedBooks = function(books_to_process){

    var books = preprocessSuggestedBooks(books_to_process)

    if(books.length > 0) {

        $('#suggested-div').append('<h2>Suggested Readings</h2>')

        console.log('grouped suggested books list:', books)

        for (var i = 0; i < Math.min(3, books.length); i++) {

            var grouped_by_author = _.groupBy(books[i], 'name');

            var authors = []
            for(var a in grouped_by_author){
                var author = {
                    name: a,
                    id: grouped_by_author[a][0].author_id
                }
                authors.push(author)
            }

            var author_links = ""

            for(var a of authors){
                author_links += ', <a href="'+ip+'pages/author.html?author_id='+a.id+'">'+a.name+'</a>'
            }


            $('#suggested-div').append(

                '<div class="col-sm singleBook">' +
                '<div class="description">' +
                '<a href="'+ip+'pages/book.html?isbn='+books[i][0].isbn+'">'+
                '<img class="singleItemImage" src="../assets/Images/BookCovers/' + books[i][0].title + '.jpg">' +
                '<h3>' + books[i][0].title + '</h3>' +
                '</a>'+
                '<p>' + author_links.substring(1) + '</p>' +
                '</div>' +
                '</div>'
            );
        }
    }
}

var preprocessSuggestedBooks = function (books) {

    var grouped_by_isbn = _.groupBy(books, 'isbn');
    var grouped_list = generateListFronGrouped(grouped_by_isbn)

    grouped_list.sort(function (a, b) {
        if (a.length < b.length) {
            return -1
        } else if (a.name > b.name) {
            return 1
        } else {
            return 0
        }
    });

    console.log('before filtering', grouped_list)

    var clean_list = grouped_list.filter(function (el) {
        return el[0].isbn != input // input is the isbn of the current book displayed on the page
    });

    console.log('after filtering: ',clean_list)

    return clean_list
}

var generateListFronGrouped = function(grouped){

    var grouped_list = []

    for (var i in grouped) {
        grouped_list.push(grouped[i])
    }
    return grouped_list
}



//----------------------------------------------------------
// Handling AddBook request
//----------------------------------------------------------

$(document).on('click', '#homepage-container button', function () {
    var isbn = $(this).closest('.singleItemContainer').find('p.isbn').html()
    console.log('found isbn = ', isbn)

    var data = {
        "ISBN": isbn
    };

    $.post(ip + "api/purchase/", data).done(
        console.log('succesful post purchase operation!'),
        showConfirmation($(this).parent())
    ).fail(
        function (jqXHR, textStatus, errorThrown) {
            if(jqXHR.status == 401){
                window.location.href = ip + "pages/login.html?#";
            }
        }
    );
})
var $prev = null
var counter = 1

function showConfirmation($div) {
    console.log('Addinggg')
    if ($prev == null) {
        $prev = $('<div class="confirmation">Added!</div>')
    } else {
        $prev.remove()
        counter++;
        $prev = $('<div class="confirmation">Added! (' + counter + ')</div>')
    }

    $div.append($prev)
    setTimeout(function () {
        if ($prev != null) {
            $prev.fadeTo("slower", 0, function () {
                $prev.remove()
                $prev = null
                counter = 0
            })
        }
    }, 3000);
}