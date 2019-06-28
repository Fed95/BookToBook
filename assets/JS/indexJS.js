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

});*/
var view = $("#show");
var move = "100px";
var sliderLimit = -750;
var current = 1;

function moveRight() {
    if(current == 7){
        
    }else{
        current= current + 1;
        var currentelem = $("#"+current.toString());
        view.scrollLeft(currentelem.offset().left - $("#1").offset().left);
        console.log(current); 
    }
}
function moveLeft() {
    if(current == 1){
        
    }else{
        current= current - 1;
        var currentelem = $("#"+current.toString());
        view.scrollLeft(currentelem.offset().left - $("#1").offset().left);
        console.log(current); 
    }
}

