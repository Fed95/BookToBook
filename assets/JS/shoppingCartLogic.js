//---------------------------------------------------------------------
//shopping cart button functions
//---------------------------------------------------------------------
//TODO: ADD DATABASE UPDATE


/* Update quantity
function updateQuantity(quantityInput)
{
    Calculate line price
    var productRow = $(quantityInput).parent().parent();
    var price = parseFloat(productRow.children('.product-price').text());
    var quantity = $(quantityInput).val();
    var linePrice = price * quantity;

     Update line price display and recalc cart totals
    productRow.children('.product-line-price').each(function () {
        $(this).fadeOut(fadeTime, function() {
            $(this).text(linePrice.toFixed(2));
            recalculateCart();
            $(this).fadeIn(fadeTime);
        });
    });
}
*/
$('#search-results-container').on('change', 'input', function (e) {
    e.preventDefault();
    updateQuantity(this);
});

function updateQuantity(quantityInput) {

    var $input = $(quantityInput);
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


