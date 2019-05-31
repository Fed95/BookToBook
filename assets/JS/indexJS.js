/*var x = require("../../ip")
console.log(x.ip)

$(document).ready(function () {
    var formContainer = $("#searchbar-container");
    var form = $("#searchbar");
    var formInput = $("#searchbar-input");

    console.log("hey, page is ready!");

    form.submit(function (event) {
        event.peventDefault();
        console.log("Search was clicked!")
    })

})

*/
var ip = "https://booktobook.herokuapp.com/api"
//var ip = "http://localhost:8080/api"



function test(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        console.log("From indexJS.js; this.responseText = ", this.responseText)
        if (this.readyState == 4 && this.status == 200) {

            $('#test-text').html(this.responseText);
        }
    };
    var input = $("#searchbar-input");
    var testDiv = $("#test");
    testDiv.html(this.responseText);
    console.log("disabling container...");
    $("#homepage-container *").fadeOut(200);
    $(document).ready(function () {
        $("#test").show();
    });
    console.log("url= ", ip + input.val());
    xhttp.open("GET", ip+ "/book/" + input.val(), true);
    xhttp.send();
}

$(()=>{
    $('#main-search-btn').click(test);
});



