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

        $ref_div.append('<div class="image-container">'
            +'<a href = "theme.html?theme='+theme+'">'
            +'<img src = "../assets/Images/ThemesImages/'+theme+'.jpg"/>'
            +'<div class="centered-text theme">'+theme+'</div>'
            +'</a>'
            +'</div>')

    }
};