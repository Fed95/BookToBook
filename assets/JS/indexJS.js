//var hidWidth;
//var scrollBarWidths = 40;

//var ip = "https://booktobook.herokuapp.com/";
var ip = "http://localhost:8080/";

/*xhttp.open("GET", ip + "api/checkuser", true);
xhttp.send();*/
$( '#shopping-link' ).click(function(e) {
    e.preventDefault();
    if(true){
        displayWarning();
    }else{
        location.href = "https://www.w3schools.com";
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
/*var widthOfList = function(){
    var itemsWidth = 0;
    $('.item').each(function(){
        var itemWidth = $(this).outerWidth();
        itemsWidth+=itemWidth;
    });
    //alert(itemsWidth);
    return itemsWidth;
};*/

/*var widthOfHidden = function(){
    return (($('.wrapper').outerWidth())-widthOfList()-getLeftPosi())-scrollBarWidths;
};*/

/*var getLeftPosi = function(){
    //return $('.item:first-child').position().left;
    return $('.list').position().left;
};*/

/*var reAdjust = function(){
    if (($('.wrapper').outerWidth()) < widthOfList()) {
        $('.scroller-right').show();
    }
    else {
        $('.scroller-right').hide();

     //var leftPos = $('.item:first-child').position().left;
     //$('.item').animate({left:"-="+leftPos+"px"},'slow');

    }

    if (getLeftPosi()<0) {
        $('.scroller-left').show();
    }
    else {
        $('.item').animate({left:"-="+getLeftPosi()+"px"},'slow');
        $('.scroller-left').hide();
    }
}*/

//reAdjust();

/*$(window).on('resize',function(e){
    reAdjust();
});*/

/*$('.scroller-right').click(function() {

    $('.scroller-left').fadeIn('slow');
    $('.scroller-right').fadeOut('slow');

    $('.list').animate({left:"+="+widthOfHidden()+"px"},'slow',function(){
        //reAdjust();
    });
});*/

/*$('.scroller-left').click(function() {
    //var leftPos = $('.item:first-child').position().left;
    //$('.item').animate({left:"-="+getLeftPosi()+"px"},'slow');
    //$('.scroller-left').hide();

    $('.scroller-right').fadeIn('slow');
    $('.scroller-left').fadeOut('slow');

    $('.list').animate({left:"-="+getLeftPosi()+"px"},'slow',function(){

    });

});*/
