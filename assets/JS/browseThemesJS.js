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

$.get(ip + "api/theme/").done(
    function(response){
        console.log("successful all themes query")
        displayFoundThemes(response);
    }
).fail(
    function (jqXHR, textStatus, errorThrown) {
        console.log("Something went wrong while looking for all themes: ", textStatus)
    }
);


//---------------------------------------------------------------------
// handling the result
//---------------------------------------------------------------------

var displayFoundThemes = function (theme_list) {

    var n = Math.ceil(theme_list.length / 4);

    generateThemeDivs(theme_list, n);

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