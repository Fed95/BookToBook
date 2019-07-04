var ip = "https://booktobook.herokuapp.com/";
//var ip = "http://localhost:8080/";var xhttpEvents = new XMLHttpRequest();
xhttpEvents.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        $(document).ready(() => {
            addMonthBestsellers(JSON.parse(this.responseText));
        });
    }
};

var current_month = new Date().getMonth();

xhttpEvents.open("GET", ip + "api/book/bestOfTheMonth?Month=" + current_month, true);
xhttpEvents.send();

var addMonthBestsellers = function (parsed) {
    console.log('Parsed bestsellers: ', parsed)

    var grouped_by_isbn = _.groupBy(parsed, 'isbn');

    console.log('grouped_by_isbn: ', grouped_by_isbn)

    var books = []

    for (var i in grouped_by_isbn) {
        var b = grouped_by_isbn[i][0]
        var book = {
            isbn: b.isbn,
            title: b.title,
            authors: getAuthorLinks(grouped_by_isbn[i]),
            sales: getPurchaseCount(grouped_by_isbn[i])
        }
        books.push(book)
    }
   // var truncated = books.slice(0, 5) //todo: try and make this dynamic

    books.sort(function (a, b) {
        if (a.sales < b.sales) {
            return -1
        } else if (a.sales > b.sales) {
            return 1
        } else {
            return 0
        }
    });
    console.log('book list prepared: ', books)
    generateBestsellerDiv(books)
};

var getPurchaseCount = function (purchases) {

    var grouped_by_purchase = _.groupBy(purchases, 'purchase_id');

    var count = 0
    for (var a in grouped_by_purchase) {
        count += grouped_by_purchase[a][0].quantity
    }

    return count
};

var getAuthorLinks = function (purchases) {

    var grouped_by_author = _.groupBy(purchases, 'name');

    var authors = []
    for (var a in grouped_by_author) {
        var author = {
            name: a,
            id: grouped_by_author[a][0].author_id
        }
        authors.push(author)
    }

    var author_links = ""

    for (var a of authors) {
        author_links += ', <a href="' + ip + 'pages/author.html?author_id=' + a.id + '">' + a.name + '</a>'
    }

    return author_links.substring(1)

};

var generateBestsellerDiv = function (books) {

    var i = 1;
    for (var b of books) {
        $('#show').append('<div class="imagebox">' +
            '<a href="'+ip+'/pages/book.html?isbn='+b.isbn+'">' +
            '<img id="'+i+'" class="image" src="./assets/Images/BookCovers/'+b.title+'.jpg">' +
            '</a>' +
            '<div class="bookinfo">' +
            '<a href="'+ip+'/pages/book.html?isbn='+b.isbn+'">' +
            '<h3>'+b.title+'</h3>' +
            '</a>' +
            '<p>'+b.authors+'</p>' +
            '</div>')
        i ++;
    }
}