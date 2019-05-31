/*
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
$(document).ready(function () {
    $("#test").hide();
});


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

    xhttp.open("GET", "http://localhost:8080/api/book/" + input.val(), true);
    xhttp.send();
    //$('#ajax_test').html("hello")
}

$(()=>{
    $('#main-search-btn').click(test);
});



