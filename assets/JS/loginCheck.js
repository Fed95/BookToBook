

function checkCookie() {
    return new Promise((res, rej) => {
        $.get("https://librarium.herokuapp.com/account", function (data) {
            if (data.length > 0) {
                var name = data[0].name;
                res(name)
            }else {
                res(false)
            }
        })
    })
}