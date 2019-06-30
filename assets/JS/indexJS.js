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

var current_month = new Date().getMonth();

xhttpEvents.open("GET", ip + "api/event/findByMonth?Month=" + current_month, true);
xhttpEvents.send();


var addMonthEvents = function (events) {
    console.log('events this month: ', events);

    for (var e of events) {
        $('#events').append(
            '<div class="row event">' +
            '<div class="container">' +
            '<div class="col-4">' +
            '<img src="./assets/Images/BookCovers/The%20BFG.jpg">' +
            '</div>' +
            '<div class="col-8">' +
            '<h3>'+e.event_name+'</h3>' +
            '<p>'+e.brief_summary+'</p>' +
            '<div class="row info">' +
            '<div class="col-">' +
            '<p>Author/s:</p>' +
            '<p>Date:</p>' +
            '<p>Location:</p>' +
            '</div>' +
            '<div class="right col-">' +
            '<p>Justin Timberlake</p>' +
            '<p>Someday...</p>' +
            '<p>Via Mazzocchi 2</p>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>'
        )
    }

}