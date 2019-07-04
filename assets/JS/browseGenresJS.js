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


//---------------------------------------------------------------------
//generating the query
//---------------------------------------------------------------------

$.get(ip + "api/genre/").done(
    function(response){
        console.log("Successful finding all genres")
        displayFoundGenres(response);
    }
).fail(
    function (jqXHR, textStatus, errorThrown) {
        console.log("Something went wrong while looking for all genres: ", textStatus)
    }
);


//---------------------------------------------------------------------
// handling the result
//---------------------------------------------------------------------

var displayFoundGenres = function (genre_list) {


    var n = Math.ceil(genre_list.length / 4);

    generategenreDivs(genre_list, n);

};


var generategenreDivs = function (parsed, n) {
    var counter = 0;
    var $ref_div = $("<div />", {class:'column', id:counter});

    for(var i in parsed){

        if(i%n === 0){
            counter ++;
            $ref_div = $("<div />", {class:'column', id:counter});
            $('#genre-container').append($ref_div);
        }

        var genre = parsed[i].genre_name;

        var $d1 = $("<div class='image-container' />");
        var $a = $("<a />", {href: 'genre.html?genre='+genre});
        var $im = $("<img />", {src: '../assets/Images/GenresImages/'+genre+'.jpg'});
        var $d2 = $("<div class='centered-text genre' />"); $d2.html(genre)

        $ref_div.append($d1);
        $d1.append($a);
        $a.append($im);
        $a.append($d2);
    }
};