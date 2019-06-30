/*var hidWidth;
var scrollBarWidths = 40;

var widthOfList = function(){
    var itemsWidth = 0;
    $('.item').each(function(){
        var itemWidth = $(this).outerWidth();
        itemsWidth+=itemWidth;
    });
    //alert(itemsWidth);
    return itemsWidth;
};

var widthOfHidden = function(){
    return (($('.wrapper').outerWidth())-widthOfList()-getLeftPosi())-scrollBarWidths;
};

var getLeftPosi = function(){
    //return $('.item:first-child').position().left;
    return $('.list').position().left;
};

var reAdjust = function(){
    if (($('.wrapper').outerWidth()) < widthOfList()) {
        $('.scroller-right').show();
    }
    else {
        $('.scroller-right').hide();*/
        /*
     var leftPos = $('.item:first-child').position().left;
     $('.item').animate({left:"-="+leftPos+"px"},'slow');
     */
    /*}

    if (getLeftPosi()<0) {
        $('.scroller-left').show();
    }
    else {
        $('.item').animate({left:"-="+getLeftPosi()+"px"},'slow');
        $('.scroller-left').hide();
    }
}

reAdjust();

$(window).on('resize',function(e){
    reAdjust();
});

$('.scroller-right').click(function() {

    $('.scroller-left').fadeIn('slow');
    $('.scroller-right').fadeOut('slow');

    $('.list').animate({left:"+="+widthOfHidden()+"px"},'slow',function(){
        //reAdjust();
    });
});

$('.scroller-left').click(function() {
    //var leftPos = $('.item:first-child').position().left;
    //$('.item').animate({left:"-="+getLeftPosi()+"px"},'slow');
    //$('.scroller-left').hide();

    $('.scroller-right').fadeIn('slow');
    $('.scroller-left').fadeOut('slow');

    $('.list').animate({left:"-="+getLeftPosi()+"px"},'slow',function(){

    });

});
*/



var view = $("#show");
var current = 1;
const mq = window.matchMedia( "(max-width: 600px)" );
const mq2 = window.matchMedia( "(max-width: 450px)" );

function moveRight() {
    if(mq.matches && mq2.matches){
        if(current >= 4){

        }else{
            current= current + 1;
            var currentelem = $("#"+current.toString());
            view.scrollLeft(currentelem.offset().left - $("#1").offset().left);
        }
    }
    else if(mq.matches && !(mq2.matches)){
        if(current >= 3){

        }
        else{
            current= current + 1;
            var currentelem = $("#"+current.toString());
            view.scrollLeft(currentelem.offset().left - $("#1").offset().left);
        }
    }else{
        if(current >= 2){

        }else{
            current= current + 1;
            var currentelem = $("#"+current.toString());
            view.scrollLeft(currentelem.offset().left - $("#1").offset().left);
        }
    }
}
function moveLeft() {
    if(current <= 1){
        
    }else{
        current= current - 1;
        var currentelem = $("#"+current.toString());
        view.scrollLeft(currentelem.offset().left - $("#1").offset().left);
    }
}

var getCookie = function(name) {
    var cookies = document.cookie.split(';');
    for(var i=0 ; i < cookies.length ; ++i) {
        var pair = cookies[i].trim().split('=');
        if(pair[0] == name)
            return pair[1];
    }
    return null;
};

c = getCookie('session')

console.log(c)