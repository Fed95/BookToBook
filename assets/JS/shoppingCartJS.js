var ip = "https://booktobook.herokuapp.com/";
//var ip = "http://localhost:8080/";


//---------------------------------------------------------------------
//generating the item list
//---------------------------------------------------------------------
var input = 1; //TODO: fetch real user_id

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        $(document).ready(() => {
            displayPurchases(this.responseText);
        });
    }
};
xhttp.open("GET", ip + "api/purchase/findByUser?UserID="+input, true);
xhttp.send();


var displayPurchases = function(purchase_list){

    //TODO: check that if book is added more than once, only quantity should change

    var parsed = JSON.parse(purchase_list);
    console.log("parsed: ", parsed);

    var tot = 0;

    for(var i in parsed){
        var purchase = {
            title: parsed[i].title,
            price: parsed[i].price,
            quantity: parsed[i].quantity
        }
        tot += generatePurchaseDiv(purchase);
    }

    var $totalprice = $('<div class="grand-total"/>');
    var $price= $('<span class="grand-total-price"  />'); $price.html(tot);
    var $total = $('<div class="grand-total"/>');
    var $button = $("<button />", {id : 'add-book-btn-1', class : "btn btn-outline-success btn-add-book" , type : "input"});
    $button.html('Proceed to Checkout');


    $("#search-results-container").append($totalprice);
    $("#search-results-container").append($total);
    $($totalprice).append($price);
    $($total).append($button);

}

var generatePurchaseDiv = function(purchase){

    var $item = $("<div class='item' />");
        var $buttons = $("<div class='buttons' />");
            var $delete_btn = $("<span class='delete-btn' />");
        var $img_div = $("<div class='image' />");
            var $img = $("<img />", { src: "../assets/Images/BookCovers/Thumbnails/"+purchase.title+".jpg"});
        var $description = $("<div class='description' />");
            var $title = $("<span />"); $title.html(purchase.title);
            var $title2 = $("<span />"); $title2.html(purchase.title);
        var $quantity = $("<div class='quantity'/>");
            var $plus_btn = $("<button />", {class:"plus-btn", type:"button", name:"button"});
                var $img_plus = $("<img />", { src: "../assets/Images/plus.svg", alt:""});
            var $num = $("<input />", {type:"text", name:"name", value:"1"});
            var $minus_btn = $("<button />", {class:"minus-btn", type:"button", name:"button"});
                var $img_minus = $("<img />", { src: "../assets/Images/minus.svg", alt:""});
        var $total = $("<input />", {class:"total-price", type:"text", name:"name", value: purchase.price*purchase.quantity});
        $total.html('$');

    $("#search-results-container").append($item);
    $item.append($buttons);
    $buttons.append($delete_btn);
    $item.append($img_div);
    $img_div.append($img);
    $item.append($description);
    $description.append($title);
    $description.append($title2);
    $item.append($quantity);
    $quantity.append($plus_btn);
    $plus_btn.append($img_plus);
    $quantity.append($num);
    $quantity.append($minus_btn);
    $minus_btn.append($img_minus);
    $item.append($total);

    return purchase.price*purchase.quantity;
};




