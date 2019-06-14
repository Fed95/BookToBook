//---------------------------------------------------------------------
//shopping cart button functions
//---------------------------------------------------------------------

$('#search-results-container').on('click', 'button.minus-btn', function(e) {
    e.preventDefault();
    var $this = $(this);
    var $input = $this.closest('div').find('input');
    var $price = $this.closest('.item').find('.total-price');
    var value = parseInt($input.val());
    var price = parseInt($price.val());
    if (value > 1) {
        price = price - price/value;
        value = value - 1;
    } else {
        //this.parentElement.parentElement.remove();
    }
  $input.val(value);
  $price.val(price);
});
 
$('#search-results-container').on('click', 'button.plus-btn', function(e) {
    e.preventDefault();
    var $this = $(this);
    var $input = $this.closest('div').find('input');
    var $price = $this.closest('.item').find('.total-price');
    var value = parseInt($input.val());
    var price = parseInt($price.val());
    if (value < 100) {
        price = price + price/value;
        value = value + 1;
    } else {
        value = 100;
    }
    $input.val(value);
    $price.val(price);
});

$('#search-results-container').on('click', 'span.delete-btn', function(){
    this.parentElement.parentElement.remove();
});


