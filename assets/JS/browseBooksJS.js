//var ip = "https://booktobook.herokuapp.com/";
var ip = "http://localhost:8080/";

// ---------------------------------------------------------------------
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
//Adding last search in search bar
$(document).ready(() => {
    $('#searchbar-input').val(input)
})

//---------------------------------------------------------------------
//generating the query
//---------------------------------------------------------------------

$.get(ip + "api/book/findByTitle?title=" + input).done(
    function(response){
        console.log("successful find book by title query")
        displayFoundBooks(response);
    }
).fail(
    function (jqXHR, textStatus, errorThrown) {
        console.log("Something went wrong while looking for theme by theme name: ", textStatus)
    }
);


//---------------------------------------------------------------------
// handling the result
//---------------------------------------------------------------------

var displayFoundBooks = function (books_list) {

    if (books_list.length > 0) {

        var grouped = _.groupBy(books_list, 'isbn');

        for (var isbn in grouped) {

            var books = grouped[isbn]; // NOTE: this is a list of tuples of the same book for the different authors

            var title = books[0].title;
            var price = books[0].price;
            var authors = [];

            for (var count in books) {
                var author = {
                    name: books[count].name,
                    id: books[count].author_id
                }
                authors.push(author);
            }

            generateBookDivTest(isbn, title, authors, price)
        }
    } else {
        $("#search-results-container").append('<div class="col-12 no-result">No books were found for "' + input + '".</div>')
    }
};

var generateBookDivTest = function (isbn, title, authors, price) {

//href="'+ ip +'pages/login.html?#"
    $("#search-results-container").append(
        '<div>' +
        '    <div class="row">' +
        '        <div class="browse-books-image col-3">' +
        '            <div class="col-12 book-img"><a href="' + ip + 'pages/book.html?isbn=' + isbn + '"><img' +
        '                    src="../assets/Images/BookCovers/Thumbnails/' + title + '.jpg"></a></div>' +
        '        </div>' +
        '           <div class="browse-books-rest col-9">' +
        '<div >' +
        '<div class="row">' +
        '<div class="book-title-and-info col-9">' +
        '<div class="row">' +
        '<h3><a href="' + ip + 'pages/book.html?isbn=' + isbn + '">' + title + '</a></h3>' +
        '</div>' +
        '<div class="row book-info">' +
        '<div class="col-4"><h4>Authors:</h4><p>' + getAuthorLinks(authors) + '</p></div> ' +
        '<div class="col-4 isbn"><h4>ISBN:</h4><p>' + isbn + '</p></div> ' +
        '<div class="col-4"><h4>Price:</h4><p>$ ' + price + '</p></div> ' +
        '</div>' +
        '</div>' +
        '<div class="col-3">' +
        '<button id="add-book-btn-1" class="btn btn-outline-success btn-add-book" type="input">Add to Cart</button>'+
        '</div>' +
        '</div>' +
        '</div>' +


        '       </div>' +
        '    </div>' +
        '</div>' +
        '<hr/>'
    )
}

// Handling AddBook request
$(document).on('click', '#search-results-container button', function () {
    var $this = $(this)
    var isbn = $this.closest('.row').find('.isbn p').html()
    console.log('found isbn = ', isbn)
    var data = {
        "isbn": isbn
    };
    $.post(ip + "api/purchase/", data).done(
        function (response) {
            console.log('successful post purchase operation! response: ', response),
                showConfirmation($this.parent())
        }
    ).fail(
        function (jqXHR, textStatus, errorThrown) {
            if(jqXHR.status == 401){
                window.location.href = ip + "pages/login.html?#";
            }
        }
    );
})
var $prev = null

function showConfirmation($div) {
    console.log('Adding confirmation button')
    if ($prev == null) {
        $prev = $('<div class="confirmation">Added!</div>')
    } else {
        $prev.remove()
        $prev = $('<div class="confirmation">Added!</div>')
    }
    console.log('appending to ', $div)
    $div.append($prev)

    setTimeout(function () {
        if ($prev != null) {
            $prev.fadeTo("slower", 0, function () {
                $prev.remove()
                $prev = null
            })
        }
    }, 2500);
}

var getAuthorLinks = function (authors) {

    var author_links = ""

    for (var a of authors) {
        author_links += ', <a href="' + ip + 'pages/author.html?author_id=' + a.id + '">' + a.name + '</a>'
    }

    return author_links.substring(1)

};

