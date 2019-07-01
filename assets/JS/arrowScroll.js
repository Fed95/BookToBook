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