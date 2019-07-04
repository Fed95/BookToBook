var ip = "https://booktobook.herokuapp.com/";
//var ip = "http://localhost:8080/";


var xhttpEvents = new XMLHttpRequest();
xhttpEvents.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        $(document).ready(() => {
            addFavourites(JSON.parse(this.responseText));
        });
    }
};

xhttpEvents.open("GET", ip + "api/book/favoriteReading", true);
xhttpEvents.send();


var addFavourites = function (favourites) {

    var grouped_by_isbn = _.groupBy(favourites, 'isbn');
    console.log('favourite books: ', grouped_by_isbn);

    for (var i in grouped_by_isbn) {

        var author_links = getAuthorLinks(grouped_by_isbn[i])
        var e = grouped_by_isbn[i][0];

        $('#suggested-div').append(
            '<div class="col-sm singleBook">' +
            '<div class="description">' +
            '<a href="'+ip+'pages/book.html?isbn='+grouped_by_isbn[i][0].isbn+'">'+
            '<img class="singleItemImage" src="../assets/Images/BookCovers/' + grouped_by_isbn[i][0].title + '.jpg">' +
            '<h3>' + grouped_by_isbn[i][0].title + '</h3>' +
            '</a>'+
            '<p>' + author_links + '</p>' +
            '</div>' +
            '</div>'
        )
    }

}

var getAuthorLinks = function (event) {

    var grouped_by_author = _.groupBy(event, 'name');

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

    return author_links.substring(1)
}