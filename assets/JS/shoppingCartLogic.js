//---------------------------------------------------------------------
//shopping cart button functions
//---------------------------------------------------------------------

$('#search-results-container').on('click', 'button.minus-btn', function (e) {
    e.preventDefault();
    var $this = $(this);
    var $input = $this.closest('div').find('input');
    var $price = $this.closest('.item').find('.total-price');
    var $total = $this.closest('.shopping-cart').find('.grand-total-price');

    var value = parseInt($input.val());
    var price = parseInt($price.val());
    var total = parseInt($total[0].innerHTML);

    if (value > 1) {
        total -= price / value;
        price -= price / value;
        value = value - 1;
    } else {
        //this.parentElement.parentElement.remove();
    }
    $input.val(value);
    $price.val(price);
    $total[0].innerHTML = total;
});


$('#search-results-container').on('click', 'button.plus-btn', function (e) {
    e.preventDefault();
    var $this = $(this);
    var $input = $this.closest('div').find('input');
    var $price = $this.closest('.item').find('.total-price');
    var $total = $this.closest('.shopping-cart').find('.grand-total-price');

    var value = parseInt($input.val());
    var price = parseInt($price.val());
    var total = parseInt($total[0].innerHTML);

    if (value < 100) {
        total += price / value;
        price += price / value;
        value = value + 1;
    } else {
        value = 100;
    }
    $input.val(value);
    $price.val(price);
    $total[0].innerHTML = total;
});

$('#search-results-container').on('click', 'span.delete-btn', function () {
    this.parentElement.parentElement.remove();
});


