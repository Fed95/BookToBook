function test(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            $('#ajax_test').html(this.responseText);
        }
    };
    xhttp.open("GET", "https://booktobook.herokuapp.com/api/book/Re", true);
    xhttp.send();
    //$('#ajax_test').html("hello")
}

$(()=>{
    $('#testpip').click(test);
});
