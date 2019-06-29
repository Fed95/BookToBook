//var ip = "https://booktobook.herokuapp.com/";
var ip = "http://localhost:8080/";


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

    var $totalprice = $('<div class="row grand-total"/>');
    var $price_text= $('<span class="col grand-total-price-text"  />'); $price_text.html("Grand Total: ");
    var $price= $('<span class="col grand-total-price"  />'); $price.html(tot);
    var $total = $('<div class="grand-total"/>');


    $("#search-results-container").append($totalprice);
    $("#search-results-container").append($total);
    $($totalprice).append($price_text);
    $($totalprice).append($price);

}

var generatePurchaseDiv = function(purchase){

    var $item = $("<div class='row item' />");
        var $buttons = $("<div class='col buttons' />");
            var $delete_btn = $("<span class='delete-btn' />");
        var $img_div = $("<div class='col image' />");
            var $img = $("<img />", { src: "../assets/Images/BookCovers/Thumbnails/"+purchase.title+".jpg"});
        var $description = $("<div class='col description' />");
            var $title = $("<span />"); $title.html(purchase.title);
            var $title2 = $("<span />"); $title2.html(purchase.title);
        var $price_info = $("<div class='row price-info'/>")
            var $price = $("<div class='col-4 product-price'/>"); $price.html(purchase.price);
            var $quantity = $("<div class='col-4 product-quantity'/>");
                var $num = $("<input />", {type:"number", min:'1', max:'9', value:purchase.quantity});
            var $total = $("<div class='col-4 total-price' />"); $total.html(purchase.price*purchase.quantity);

    $("#search-results-container").append($item);
    $item.append($buttons);
    $buttons.append($delete_btn);
    $item.append($img_div);
    $img_div.append($img);
    $item.append($description);
    $description.append($title);
    $description.append($title2);
    $item.append($price_info);
    $price_info.append($price);
    $price_info.append($quantity);
    $quantity.append($num);
    $price_info.append($total);

    return purchase.price*purchase.quantity;
};




