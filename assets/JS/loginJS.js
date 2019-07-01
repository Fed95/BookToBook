//var ip = "https://booktobook.herokuapp.com/";
var ip = "http://localhost:8080/";

$('#form-signin').submit(function(e){
    e.preventDefault();
})
function toggleResetPswd(e){
    e.preventDefault();
    $('#logreg-forms .form-signin').toggle() // display:block or none
    $('#logreg-forms .form-reset').toggle() // display:block or none
}

function toggleSignUp(e){
    e.preventDefault();
    $('#logreg-forms .form-signin').toggle(); // display:block or none
    $('#logreg-forms .form-signup').toggle(); // display:block or none
}
/*function ciao(e){
    e.preventDefault;
    $('#logreg-forms #PIPPO').css("font-size","500%")
}*/


//---------------------------------------------------------------------
//generating the query
//---------------------------------------------------------------------
function login() {
    var username = $('#inputEmail').val();
    var password = $('#inputPassword').val();
    console.log("pippoooo");
    var data = {
        'user_mail': username,
        'password': password
    };
    $.post(ip + "api/user/login", data , function (data) {
        if (data.length > 0){
            //setCookie("session", username, 100);
            alert("ciao!");
            //alert("Hey " + username + ", you are logged in!\nClick ok, you will be redirect to the Home page!");
        }else {
            alert("Wrong! Retry, you'll be luckier" )
        }
    })
}


    /*$( '#btn-signIn' ).click(function() {

        var loginForm =
            {
                "user_mail": document.getElementById("inputEmail").value,
                "password": document.getElementById("inputPassword").value
            };
        console.log(document.getElementById("inputEmail").value);
        console.log(document.getElementById("inputPassword").value);
        //var input = JSON.stringify(loginForm);
        //var xhttp = new XMLHttpRequest();
        /*xhttp.onreadystatechange = function() {
            console.log(this.readyState)
            console.log(this.status)

            if (this.readyState == 4 && this.status == 200) {
                console.log("Post numero 2")
                var xhttp2 = new XMLHttpRequest();
                xhttp2.open("POST", ip + "api/user/logout", true);
                xhttp2.setRequestHeader("Content-Type", "application/json");
                xhttp2.send();

            }
        };*/
        /*xhttp.open("POST", ip + "api/user/login", true);
        xhttp.setRequestHeader("Content-Type", "application/json");
        xhttp.send(input);*/
        /*$.ajax({
            type: 'POST',
            url: ip + "api/user/login",
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            contentType: 'application/x-www-form-urlencoded; charset=utf-8',
            dataType: 'json',
            data: input,
            success: function (response) {
                console.log(response);
                return response;
            }
        })

        $.post(ip + "api/user/login", loginForm, function(){
            alert("Ciao");
        });

    });*/



