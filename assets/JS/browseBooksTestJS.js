var ip = "https://booktobook.herokuapp.com/";
//var ip = "http://localhost:8080/";



//---------------------------------------------------------------------
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
xhttp.open("GET", ip + "api/book/findByTitle?Title="+input+"&Abstract%20Required=false&Image%20Required=false&Genres%20Required=false&Themes%20Required=false&Authors%20information%20Required=false&Events%20Information%20Required=false", true);
xhttp.send();


//---------------------------------------------------------------------
// handling the result
//---------------------------------------------------------------------

var displayFoundBooks = function (book_list) {


    var parsed = JSON.parse(book_list);
    console.log("parsed: ", parsed);
    var grouped = _.groupBy(parsed, 'isbn');
    console.log("grouped: ", grouped);

    var n = Math.ceil(5 / 2);

    generatebookDivs(grouped, n);

};


var generatebookDivs = function (grouped, n) {

    var counter = 0;
    var i = 0;
    var $ref_div = $("<div />", {class:'column', id:counter});

    for(var isbn in grouped){
        if(i%n === 0){
            counter ++;
            $ref_div = $("<div />", {class:'column', id:counter});
            console.log('aaaaaaaaa')
            $('#search-results-container').append($ref_div);
            console.log('hhhhhhhhh')
        }

        var title = grouped[isbn][0].title;
        var authors = [];

        for(var j in grouped[isbn]){
            authors.push(grouped[isbn][j].name);
        }

        var $d1 = $("<div class='singleBook'/>");
            var $im = $("<img />", {class:'singleItemImage', src:'../assets/Images/BookCovers/'+title+'.jpg'});
            var $d2 = $("<div class='description'/>");
                var $h = $("<h3 />"); $h.html(title);


        $ref_div.append($d1);
        $d1.append($im);
        $d1.append($d2);
        $d2.append($h);

        for(var a in authors){
            var $p = $("<p />"); $h.html(a);
            $d2.append($p);
        }

        i++;
    }
};


