//---------------------------------------------------------------------
//shopping cart button functions
//---------------------------------------------------------------------

$('#search-results-container').on('change', 'input', function (e) {
    e.preventDefault();
    updateQuantity($(this));
    updateDb($(this));
});

function updateQuantity($input) {

    var $price = $input.closest('.item').find('.product-price');
    var $total = $input.closest('.item').find('.total-price');
    var $grand_total = $input.closest('.shopping-cart').find('.grand-total-price');

    var value = parseInt($input.val());
    if(value < 1){
        value = 0
        $input.val(0)
    }
    var price = parseInt($price[0].innerHTML);
    var old_total = parseInt($total[0].innerHTML);
    var grand_total = parseInt($grand_total[0].innerHTML);
    var new_total = price*value;
    var diff = new_total - old_total;

    $total[0].innerHTML = new_total;
    $grand_total[0].innerHTML = grand_total + diff;
};



$('#search-results-container').on('click', 'span.delete-btn', function () {


    var $total = $(this).closest('.item').find('.total-price');
    var $grand_total = $(this).closest('.shopping-cart').find('.grand-total-price');

    var total = parseInt($total[0].innerHTML);
    var grand_total = parseInt($grand_total[0].innerHTML);

    $grand_total[0].innerHTML = grand_total - total;

    this.parentElement.parentElement.remove();


});


function updateDb($input){
        var quantity = $input.val()
        console.log('found quantity = ', quantity)
        var isbn = $input.closest('.item').find('.isbn').html()
        console.log('found isbn = ', isbn)
        var purchase_id = $input.closest('.item').find('.purchase_id').html()
        console.log(purchase_id)

        var data = {
            "purchase_id": purchase_id,
            "isbn": isbn,
            "quantity": quantity
        };

        $.post(ip + "api/purchase/book", data).done(
            function(response){
                // do something when response is ok
                console.log('succesful post purchase operation! response: ',response);
            }
        ).fail(
            function(jqXHR, textStatus, errorThrown) {
                console.log('failed!')
            }
        );

}


