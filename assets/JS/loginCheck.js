//var ip = "https://booktobook.herokuapp.com/";
var ip = "http://localhost:8080/";

$(document).ready(function () {
    console.log($('#myNavbar'))

    checkCookie().then(user_mail => {

        if (user_mail === false) {
            console.log('User Check couldn\'t find any active cookies!')
            $('#login-link').html($('#login-link').html().replace("Logout", "Login"));
            $("#login-link").attr("href", "../pages/loginPage.html?#");
            $("#shopping-link").attr("href", "../pages/loginPage.html?#");
        } else {
            console.log('User Check found some delicious cookies!')
            $("#login-link").attr("onclick", "logout()");
            $("#shopping-link").attr("href", "../pages/shoppingCart.html");
        }
    })
})

function checkCookie() {
    return new Promise((res, rej) => {

        console.log('Starting cookie check');

        $.get(ip + "api/user/check").done(
            function(response){
                console.log("looking for cookies, found: ", response)
                if(_.isEmpty(response)){
                    res(false)
                }else{
                    res(response.mail)
                }
            }
        ).fail(
            function (response) {
                console.log("Something went wrong during cookie check ", response)
                res(false)
            }
        );
    })
}


function logout() {

    console.log('//////////////////////////////////////////')

    $.post(ip + "api/user/logout").done(
        function(response){
            location.reload();
            console.log("Logout successful")
            console.log(response);

        }
    ).fail(
        function(jqXHR, textStatus, errorThrown) {
            console.log('Something went wrong during logout')
        }
    );
}
