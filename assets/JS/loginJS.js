var ip = "https://booktobook.herokuapp.com/";
//var ip = "http://localhost:8080/";

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

$(()=>{
    // Login Register Form
    $('#logreg-forms #forgot_pswd').click(toggleResetPswd);
    $('#logreg-forms #cancel_reset').click(toggleResetPswd);
    //$('#logreg-forms #PIPPO').click(ciao);
    $('#logreg-forms #btn-signup').click(toggleSignUp);
    $('#logreg-forms #cancel_signup').click(toggleSignUp);
    $( '#btn-signIn' ).click(function() {
        //console.log("Pusce gay");
        var loginForm =
            {
                "UserId": "filipporadicchio@gmail.com",
                "Password": "trichipuzza"
            };
        var input = JSON.stringify(loginForm);
        //alert(JSON.stringify(loginForm));
        var xhttp = new XMLHttpRequest();
        xhttp.open("POST", ip + "api/user/login", true);
        xhttp.setRequestHeader("Content-Type", "applications/json");
        //alert(JSON.stringify(JSON.parse(input)));
        xhttp.send(input);
        /*$.post(ip + "api/user/login", JSON.parse(input), json, function(){
            alert("Ciao");
        });*/

        console.log("Fine");
    });
});


//---------------------------------------------------------------------
//generating the query
//---------------------------------------------------------------------


