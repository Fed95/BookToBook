var ip = "https://booktobook.herokuapp.com/api";
//var ip = "http://localhost:8080/api";




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
const input = getUrlParameter('search-text');


//---------------------------------------------------------------------
//generating the query and handling the result
//---------------------------------------------------------------------
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    console.log("From searchJS.js, this.responseText = ", this.responseText);
    if (this.readyState == 4 && this.status == 200) {
        $(document).ready(() => {
            $('#search-result').html(this.responseText);
        });
    }
};

console.log("url= ", ip + "/book/" + input);
xhttp.open("GET", ip + "/book/" + input, true);
xhttp.send();

