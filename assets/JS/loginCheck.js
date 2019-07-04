//var ip = "https://booktobook.herokuapp.com/";
var ip = "http://localhost:8080/";

checkCookie().then(user_mail => {
    $(document).ready(()=>{
        if (user_mail) {
        $('#login-link').html($('#login-link').html().replace("", "Logout"));
        $("#login-link").attr("onclick", "logout()");
        $("#login-link").attr("href", "../index.html");
        $("#shopping-link").attr("href", "../pages/shoppingCart.html");
        console.log('User Check found some delicious cookies!')
    } else {
        $('#login-link').html($('#login-link').html().replace("", "Login"));
        $("#login-link").attr("href", "../pages/login.html?#");
        $("#shopping-link").attr("href", "../pages/login.html?#");
        console.log('User Check couldn\'t find any active cookies!')
    }})

})

function checkCookie() {
    return new Promise((res, rej) => {

        $.get(ip + "api/user/check").done(
            function (response) {
                if (_.isEmpty(response)) {
                    res(false)
                } else {
                    res(response.mail)
                }
            }
        ).fail(
            function (jqXHR, textStatus, errorThrown) {
                console.log("Something went wrong while checking for user cookies: ", textStatus)
            }
        );
    })
}


function logout() {

    $.post(ip + "api/user/logout").done(
        function (response) {
            location.reload();
            console.log("Logout successful")
            console.log(response);
            window.location.href = ip + 'index.html'
        }
    ).fail(
        function (jqXHR, textStatus, errorThrown) {
            console.log('Something went wrong during logout')
            window.location.href = ip + 'index.html'
        }
    );
}
