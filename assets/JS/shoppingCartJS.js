var ip = "https://booktobook.herokuapp.com/";
//var ip = "http://localhost:8080/";


//---------------------------------------------------------------------
//generating the item list
//---------------------------------------------------------------------
var input = 1; //TODO: fetch real user_id
var purchase_id = null


var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        $(document).ready(() => {
            displayPurchases(this.responseText);
        });
    }
};
xhttp.open("GET", ip + "api/purchase/findByUser?UserID=" + input, true);
xhttp.send();


var displayPurchases = function (purchase_list) {

    //TODO: check that if book is added more than once, only quantity should change

    var parsed = JSON.parse(purchase_list);
    console.log("parsed: ", parsed);
    var tot = 0;

    if (parsed.length > 0) {
        var grouped_by_isbn = _.groupBy(parsed, 'isbn');
        purchase_id = parsed[0].purchase_id

        for (var isbn in grouped_by_isbn) {

            var books = grouped_by_isbn[isbn];
            var purchase = {
                isbn: grouped_by_isbn[isbn][0].isbn,
                title: grouped_by_isbn[isbn][0].title,
                price: grouped_by_isbn[isbn][0].price,
                quantity: grouped_by_isbn[isbn][0].quantity,
                authors: []
            }
            for (var count in books) {
                var author = {
                    name: books[count].name,
                    id: books[count].author_id
                }
                purchase.authors.push(author);
            }
            tot += generatePurchaseDiv(purchase);
        }
    }else{
        $("#search-results-container").append('<h1 class="no-result">Your shopping cart is empty.</h1>')
    }
        var $totalprice = $('<div class="row grand-total"/>');
        var $price_text = $('<span class="col grand-total-price-text"  />');
        $price_text.html("Grand Total: ");
        var $price = $('<span class="col grand-total-price"  />');
        $price.html(tot);
        var $total = $('<div class="grand-total"/>');


        $("#search-results-container").append($totalprice);
        $("#search-results-container").append($total);
        $($totalprice).append($price_text);
        $($totalprice).append($price);


}

var generatePurchaseDiv = function (purchase) {

    console.log(purchase)

    var $item = $("<div class='row item' />");
    var $buttons = $("<div class='col buttons' />");
    var $delete_btn = $("<span class='delete-btn' />");
    var $img_div = $("<div class='col image' />");
    var $img = $("<img />", {src: "../assets/Images/BookCovers/Thumbnails/" + purchase.title + ".jpg"});
    var $description = $("<div class='col description' />");
    var $title_link = $("<a >", {class: 'title-link', href: ip + "/pages/book.html?isbn=" + purchase.isbn});
    var $title = $("<h4 >");
    $title.html(purchase.title);
    var $title2 = $("<span />");
    $title2.html('By: ' + getAuthorLinks(purchase));
    var $isbn = $("<span class='isbn'/>");
    $isbn.html('ISBN: ' + purchase.isbn);
    var $price_info = $("<div class='row price-info'/>")

    var $price = $("<div class='col-4 product-price'/>");
    $price.html(purchase.price);
    var $quantity = $("<div class='col-4 product-quantity'/>");
    var $num = $("<input />", {type: "number", min: '1', value: purchase.quantity});
    var $total = $("<div class='col-4 total-price' />");
    $total.html(purchase.price * purchase.quantity);

    $("#search-results-container").append($item);
    $item.append($buttons);
    $buttons.append($delete_btn);
    $item.append($img_div);
    $img_div.append($img);
    $item.append($description);
    $description.append($title_link);
    $title_link.append($title);
    $description.append($title2);
    $description.append($isbn);
    $item.append($price_info);
    $price_info.append($price);
    $price_info.append($quantity);
    $quantity.append($num);
    $price_info.append($total);

    return purchase.price * purchase.quantity;
};


var getAuthorLinks = function (purchase) {

    var author_links = ""

    for (var a of purchase.authors) {
        author_links += ', <a href="' + ip + 'pages/author.html?author_id=' + a.id + '">' + a.name + '</a>'
    }

    return author_links.substring(1)

}

//---------------------------------------------------------------------
//  Shopping Cart Logic
//---------------------------------------------------------------------


$('#search-results-container').on('change', 'input', function (e) {
    e.preventDefault();
    updateQuantity(this);
    updateDb($(this));
});

function updateQuantity(input_form) {

    var $input = $(input_form)
    var $price = $input.closest('.item').find('.product-price');
    var $total = $input.closest('.item').find('.total-price');
    var $grand_total = $input.closest('.shopping-cart').find('.grand-total-price');

    var value = parseInt($input.val());
    if (value < 1) {
        value = 0;
        $input.val(0);
        input_form.parentElement.parentElement.parentElement.remove();
    }
    var price = parseInt($price[0].innerHTML);
    var old_total = parseInt($total[0].innerHTML);
    var grand_total = parseInt($grand_total[0].innerHTML);
    var new_total = price * value;
    var diff = new_total - old_total;

    $total[0].innerHTML = new_total;
    $grand_total[0].innerHTML = grand_total + diff;
};


$('#search-results-container').on('click', 'span.delete-btn', function () {

    var $total = $(this).closest('.item').find('.total-price');
    var $input = $(this).closest('.row').find('input')
    var $grand_total = $(this).closest('.shopping-cart').find('.grand-total-price');

    var total = parseInt($total[0].innerHTML);
    var grand_total = parseInt($grand_total[0].innerHTML);

    $input.val(0)
    $grand_total[0].innerHTML = grand_total - total;

    this.parentElement.parentElement.remove();

    deleteInDb($(this))

});


function updateDb($input) {
    var quantity = $input.val()
    console.log('found quantity = ', quantity)
    var isbn = $input.closest('.item').find('.isbn').html().substring(6)
    console.log('found isbn =', isbn)
    console.log('purchase_id =', purchase_id)

    var data = {
        "purchase_id": purchase_id,
        "isbn": isbn,
        "quantity": quantity
    };

    $.post(ip + "api/purchase/book", data).done(
        function (response) {
            // do something when response is ok
            console.log('succesful post purchase operation! response: ', response);
        }
    ).fail(
        function (jqXHR, textStatus, errorThrown) {
            console.log('failed!')
        }
    );

}

function deleteInDb($input) {
    var isbn = $input.closest('.item').find('.isbn').html().substring(6)
    console.log('found isbn = ', isbn)
    var data = {
        "purchase_id": purchase_id,
        "isbn": isbn
    };

    $.ajax({
        url: ip + "api/purchase/book",
        type: 'DELETE',
        success: function (response) {
            console.log('successful delete purchase operation!');
        },
        data: data
    });

}

function order() {
    var shiping_address = $('#inputAddress').val();
    var cardholder = $('#nameCard').val();
    var card_number = $('#inputCard').val();
    var data = {
        'purchase_id': purchase_id,
        'shipping_address': shiping_address,
        'cardholder': cardholder,
        'card_number': card_number
    };
    $.post(ip + "api/purchase/completed", data).done(
        function(response){
            // do something when response is ok
            console.log("Payment completed")
            console.log(response);
            window.location.href = ip + "index.html";
        }
    ).fail(
        function(jqXHR, textStatus, errorThrown) {
            console.log('Payment failed!')
            if(jqXHR.status == 404){
                displayWarning("Invalid Username or Password, did you remember to "+'<a href="#" class="register-dynamic-link">Register</a>'+ " ?")
            }

        }
    );
}


