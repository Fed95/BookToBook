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
//const input = getUrlParameter('isbn');
const input = 1;


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

    console.log(event)


    var $div1 = $("<div class = 'col-12'/>");
        var $div2 = $("<div class = 'row'/>");
            var $im = $("<div class = 'image-container'/>");
        var $div3 = $("<div class = 'row'/>");
            var $div4 = $("<div class = 'col-3 no-vert-padding center-align'/>");
                var $h1 = $("<h3 class = 'sideheading'/>"); $h1.html('Book:');
                var $div5 = $("<div class = 'bookCoverContainer-no-margin'/>");
                    var $a1 = $("<a href='./event.html'>");
                        var $im1 = $("<img />", {class:'singleItemImage', src:'../assets/Images/BookCovers/' + event.title +'.jpg'});
                var $h2 = $("<h3 class = 'sideheading'/>"); $h2.html('Author/s:');

            var $div7 = $("<div class = col-9 no-vert-padding'/>");
                var $h3 = $("<h1 class = 'singleItemName'/>"); $h3.html(event.event_date.substr(0, 10) + ' - ' + event.event_name);
                var $div8 = $("<div class = textcontent'/>"); $div8.html(event.summary);
                var $hr1 = $("<hr />");
                var $div9 = $("<div class = 'row'/>");
                    var $div10 = $("<div class = 'col-4 eventinfo'/>");
                        var $p1 = $("<p />"); $p1.html('Date:');
                        var $p2 = $("<p />"); $p1.html('Starting time:');
                        var $p3 = $("<p />"); $p2.html('Ending time:');
                        var $p4 = $("<p />"); $p4.html('Location:');
                    var $div11 = $("<div class = 'col-8 eventinfo'/>");
                        var $p5 = $("<p />"); $p5.html(event.event_date.substr(0, 10));
                        var $p6 = $("<p />"); $p5.html(event.start_time.substr(0, 5));
                        var $p7 = $("<p />"); $p6.html(event.end_time.substr(0, 5));
                        var $p8 = $("<p />"); $p7.html(event.location);
                var $hr2 = $("<hr />");
                var $div12 = $("<div class = 'google-maps'/>");
                    var $frame = $("<iframe src='https://www.google.com/maps?&amp;q="+encodeURIComponent(event.location)+"&amp;output=embed' width='400' height='300' frameborder='0' style='border:0' allowfullscreen/>");



    $("#homepage-container").append($div1);
    $div1.append($div2);
    $div2.append($im);
    $div1.append($div3);
    $div3.append($div4);
    $div4.append($h1);
    $div4.append($div5);
    $div5.append($a1);
    $a1.append($im1);
    $div4.append($h2);

    addAuthors($div4, authors);

    $div3.append($div7);
    $div7.append($h3);
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
}


/* <div class="col-12">
                        <div class="row">
                            <div class='image-container'></div>
                        </div>
                        <div class="row">
                            <div class="col-3 no-vert-padding center-align">
                                <h3 class="sideheading">Book:</h3>
                                <div class="bookCoverContainer-no-margin">
                                    <a href="./event.html"><img class="singleItemImage" src="../assets/Images/BookCovers/Prey.jpg"></a>
                                </div>
                                <h3 class="sideheading">Author/s:</h3>
                                <div class="authorImageContainer-no-margin">
                                    <a href="./event.html"><img class="singleItemImage" src="../assets/Images/AuthorPictures/Michael%20Crichton.jpg"></a>
                                </div>
                                <a href="./event.html" class="centered-link">Michael Crichton</a>
                            </div>
                            <div class="col-9 no-vert-padding">
                                <h1 class="singleItemName">Reaching Human Intelligence</h1>
                                <p class="datestyle">01/07/1995</p>
                                <div class="textcontent">John Michael Crichton (/ˈkraɪtən/; October 23, 1942 – November 4, 2008) was an American author, screenwriter, and film director and producer best known for his work in the science fiction, thriller, and medical fiction genres. His books have sold over 200 million copies worldwide, and over a dozen have been adapted into films. His literary works are usually within the action genre and heavily feature technology. His novels epitomize the techno-thriller genre of literature, often exploring technology and failures of human interaction with it, especially resulting in catastrophes with biotechnology. Many of his novels have medical or scientific underpinnings, reflecting his medical training and scientific background. He wrote, among other works, The Andromeda Strain (1969), The Great Train Robbery (1975), Congo (1980), Sphere (1987), Jurassic Park (1990), Rising Sun (1992), Disclosure (1994), The Lost World (1995), Airframe (1996), Timeline (1999), Prey (2002), State of Fear (2004), and Next (2006). Films he wrote and directed included Westworld (1973), Coma (1978), The Great Train Robbery (1979), Looker (1981), and Runaway (1984).</div>
                                <hr>
                                <div class="row">
                                    <div class="col-4 eventinfo">
                                        <p>Starting time:</p>
                                        <p>Event duration:</p>
                                        <p>Address:</p>
                                        <p>Location:</p>
                                    </div>
                                    <div class="col-8 eventinfo">
                                        <p>16:00</p>
                                        <p>3 hours</p>
                                        <p>Via Edoardo Bonardi 23</p>
                                        <p>Main room at the third floor</p>
                                    </div>
                                </div>
                                <hr>
                                <div class="google-maps">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2797.5157899504575!2d9.227588915430724!3d45.47955717910118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c6f6b5d0c583%3A0x40368fe89bcde753!2sVia+Edoardo+Bonardi%2C+23%2C+20133+Milano+MI!5e0!3m2!1sen!2sit!4v1561050495243!5m2!1sen!2sit" width="400" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>
                                </div>
                            </div>
                        </div>
                    </div>*/