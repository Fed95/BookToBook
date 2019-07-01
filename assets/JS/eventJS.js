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
const input = getUrlParameter('event_id');


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
console.log('preparing get fun')
xhttp.open("GET", ip + "api/event/"+input, true);
xhttp.send();



//---------------------------------------------------------------------
//handling the result
//---------------------------------------------------------------------

var displayFoundBooks = function(book) {

    var parsed = JSON.parse(book);
    console.log("parsed: ", parsed);

    var grouped_by_author = _.groupBy(parsed, 'name');

    var authors = [];

    for(var i in grouped_by_author){
        var author = {
            name: grouped_by_author[i][0].name,
            id: grouped_by_author[i][0].author_id
        };

        authors.push(author);
    }

    generateEventDiv(parsed[0], authors);
};





var generateEventDiv = function (event, authors) {

    console.log("event: ", event)


    var $div1 = $("<div class = 'col-12'/>");
        var $div2 = $("<div class = 'row'/>");
            var $im = $("<div class = 'image-container'/>");
            var $title = $("<div class = 'event-title-container'/>");
                var $h3 = $("<h1/>"); $h3.html(event.event_name);
        var $div3 = $("<div class = 'row'/>");
            var $div4 = $("<div class = 'col-3 no-vert-padding center-align'/>");
                var $div5 = $("<div class = 'bookCoverContainer-no-margin'/>");
                    var $a1 = $("<a >", {href:'./book.html?isbn='+event.isbn});
                        var $im1 = $("<img />", {class:'singleItemImage', src:'../assets/Images/BookCovers/' + event.title +'.jpg'});
                var $h2 = $("<h3 class = 'sideheading'/>"); $h2.html('Author/s:');

            var $div7 = $("<div class = col-9 no-vert-padding'/>");
                var $div8 = $("<div class = textcontent'/>"); $div8.html(event.summary);
                var $hr1 = $("<hr />");
                var $div9 = $("<div class = 'row'/>");
                    var $div10 = $("<div class = 'col-4 eventinfo'/>");
                        var $p1 = $("<p />"); $p1.html('Date:');
                        var $p2 = $("<p />"); $p2.html('Starting time:');
                        var $p3 = $("<p />"); $p3.html('Ending time:');
                        var $p4 = $("<p />"); $p4.html('Location:');
                    var $div11 = $("<div class = 'col-8 eventinfo'/>");
                        var $p5 = $("<p />"); $p5.html(event.event_date.substr(0, 10));
                        var $p6 = $("<p />"); $p6.html(event.start_time.substr(0, 5));
                        var $p7 = $("<p />"); $p7.html(event.end_time.substr(0, 5));
                        var $p8 = $("<p />"); $p8.html(event.location);
                var $hr2 = $("<hr />");
                var $div12 = $("<div class = 'google-maps'/>");
                    var $frame = $("<iframe src='https://www.google.com/maps?&amp;q="+encodeURIComponent(event.location)+"&amp;output=embed' width='400' height='300' frameborder='0' style='border:0' allowfullscreen/>");



    $("#homepage-container").append($div1);
    $div1.append($div2);
    $div2.append($im);
    $im.append($title);
    $title.append($h3);
    $div1.append($div3);
    $div3.append($div4);
    $div4.append($div5);
    $div5.append($a1);
    $a1.append($im1);
    $div4.append($h2);

    addAuthors($div4, authors);

    $div3.append($div7);
    //$div7.append($h3);
    $div7.append($div8);
    $div7.append($hr1);
    $div7.append($div9);
    $div9.append($div10);
    $div10.append($p1);
    $div10.append($p2);
    $div10.append($p3);
    $div10.append($p4);
    $div9.append($div11);
    $div11.append($p5);
    $div11.append($p6);
    $div11.append($p7);
    $div11.append($p8);
    $div7.append($hr2);
    $div1.append($div12);
    $div12.append($frame);

};



var addAuthors = function ($div, authors) {

    console.log(authors);

    var $ul = $("<ul />");

    for(var i in authors){

        var $li = $("<li />");
        var $a = $("<a />", {href:ip + 'pages/author.html?author_id='+authors[i].id, class:'authorlink'});
        $li.html(authors[i].name);

        $a.append($li);
        $ul.append($a);
    }
    $div.append($ul);
};