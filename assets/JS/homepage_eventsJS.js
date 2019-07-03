//var ip = "https://booktobook.herokuapp.com/";
var ip = "http://localhost:8080/";

var xhttpEvents = new XMLHttpRequest();
xhttpEvents.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        $(document).ready(() => {
            addMonthEvents(JSON.parse(this.responseText));
        });
    }
};

//todo check if this is returning the correct month. sembra che torni sempre 6
var current_month = new Date().getMonth();

xhttpEvents.open("GET", ip + "api/event/findByMonth?Month=" + current_month, true);
xhttpEvents.send();


var addMonthEvents = function (events) {

    var grouped_by_isbn = _.groupBy(events, 'isbn');
    console.log('events this month: ', grouped_by_isbn);

    for (var i in grouped_by_isbn) {

        var author_links = getAuthorLinks(grouped_by_isbn[i])
        var e = grouped_by_isbn[i][0];

        $('#events').append(
            '<div class="container">' +
            '<a href="'+ip+'pages/event.html?event_id='+e.event_id+'">' +
            '<div class="row event">' +
            '<div class="col-4 img-container">' +
            '<img src="./assets/Images/BookCovers/'+e.title+'.jpg">' +
            '</div>' +
            '<div class="col-8">' +
            '<h3>'+e.event_name+'</h3>' +
            '<p>'+e.brief_summary+'</p>' +
            '<div class="row info">' +
            '<div class="col-">' +
            '<p>Book:</p>' +
            '<p>Author/s:</p>' +
            '<p>Date:</p>' +
            '<p>Location:</p>' +
            '</div>' +
            '<div class="right col-">' +
            '<a href="'+ip+'pages/book.html?isbn='+e.isbn+'">'+
            '<p>'+e.title+'</p>' +
            '</a>'+
            '<p>' + author_links.substring(1) + '</p>' +
            '<p>'+e.event_date.substring(0, 10)+'</p>' +
            '<p>'+e.location+'</p>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</a>' +
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

    return author_links

}