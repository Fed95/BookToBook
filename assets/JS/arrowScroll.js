var view = $("#show");
var current = 1;
const mq = window.matchMedia( "(max-width: 600px)" );
const mq2 = window.matchMedia( "(max-width: 450px)" );

$(document).ready(function () {
    $('#leftArrow').fadeTo( "slow" , 0.1)
})

function moveRight() {
    if(mq.matches && mq2.matches){
        if(current >= 4){

        }else{
            if(current == 3){
                $('#rightArrow').fadeTo( "slow" , 0.1)
            }
            $('#leftArrow').fadeTo( "slow" , 1)
            current = current + 1;
            console.log(current)
            var currentelem = $("#"+current.toString());
            view.animate( { scrollLeft: currentelem.offset().left - $("#1").offset().left }, 300);
        }
    }
    else if(mq.matches && !(mq2.matches)){
        if(current >= 3){

        }
        else{
            if(current == 2){
                $('#rightArrow').fadeTo( "slow" , 0.3)
            }
            $('#leftArrow').fadeTo( "slow" , 1)
            current= current + 1;
            var currentelem = $("#"+current.toString());
            view.animate( { scrollLeft: currentelem.offset().left - $("#1").offset().left }, 300);
        }
    }else{
        if(current >= 2){

        }else{
            if(current == 1){
                $('#rightArrow').fadeTo( "slow" , 0.3)
            }
            $('#leftArrow').fadeTo( "slow" , 1)
            current= current + 1;
            var currentelem = $("#"+current.toString());
            view.animate( { scrollLeft: currentelem.offset().left - $("#1").offset().left }, 300);
        }
    }
}
function moveLeft() {
    if(current <= 1){
        
    }else{
        if(current == 2){
            $('#leftArrow').fadeTo( "slow" , 0.3)
        }
        $('#rightArrow').fadeTo( "slow" , 1)
        current= current - 1;
        var currentelem = $("#"+current.toString());
        view.animate( { scrollLeft: currentelem.offset().left - $("#1").offset().left }, 300);
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