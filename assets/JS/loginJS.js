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
        console.log("CLICK")
        alert( "Handler for .click() called." );
    });
});


//---------------------------------------------------------------------
//generating the query
//---------------------------------------------------------------------
var xhttp = new XMLHttpRequest();
xhttp.open("POST", ip + "api/user/findByTitle?Title="+input+"&Abstract%20Required=false&Image%20Required=false&Genres%20Required=false&Themes%20Required=false&Authors%20information%20Required=false&Events%20Information%20Required=false", true);
xhttp.send();

