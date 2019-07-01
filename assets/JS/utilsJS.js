var ip = "http://localhost:8080/";

/*xhttp.open("GET", ip + "api/checkuser", true);
xhttp.send();*/
$( '#shopping-link' ).click(function(e) {
    e.preventDefault();
    if(true){
        displayWarning();
    }else{
        location.href = "../pages/shoppingCart.html";
    }

    /*var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            $(document).ready(() => {

            });
        }
    };*/
});


//<button type="button" class="close" data-dismiss="alert">&times;</button>
var displayWarning = function(){
    //document.getElementById("#warning-row").innerHTML = "";
    $("#warning-col").html("");
    var $alert = $("<div class='alert alert-warning alert-dismissible show' />");
    //var $col1 = $("<div class='col-11 no-top-pad' />");
    var $message = $("<span />");
    $message.html("To access the shopping cart perform login/registration");
    //var $col2 = $("<div class='col-1 no-top-pad' />");
    var $button = $("<button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>");
    $("#warning-col").append($alert);
    //$alert.append($col1);
    //$alert.append($col2);
    $alert.append($message);
    $alert.append($button);
};


