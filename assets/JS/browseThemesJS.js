//var ip = "https://booktobook.herokuapp.com/";
var ip = "http://localhost:8080/";


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
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        $(document).ready(() => {
            displayFoundBooks(this.responseText);
        });
    }
};
console.log("getting themes!");
xhttp.open("GET", ip + "api/theme/", true);
xhttp.send();


//---------------------------------------------------------------------
// handling the result
//---------------------------------------------------------------------

var displayFoundBooks = function (theme_list) {

    var parsed = JSON.parse(theme_list);
    console.log("parsed: ", parsed);

    var n = Math.ceil(parsed.length / 4);

    generateThemeDivs(parsed, n);

};


var generateThemeDivs = function (parsed, n) {
    var counter = 0;
    var $ref_div = $("<div />", {class:'column', id:counter});

    for(var i in parsed){

        if(i%n === 0){
            counter ++;
            $ref_div = $("<div />", {class:'column', id:counter});
            $('#genre-container').append($ref_div);
        }

        var theme = parsed[i].theme_name;

        var $d1 = $("<div class='image-container' />");
        var $a = $("<a />", {href: 'theme.html?theme='+theme});
        var $im = $("<img />", {src: '../assets/Images/GenresImages/Adventure.jpg'});
        var $d2 = $("<div class='centered-text' />"); $d2.html(theme)

        $ref_div.append($d1);
        $d1.append($a);
        $a.append($im);
        $a.append($d2);
    }
};