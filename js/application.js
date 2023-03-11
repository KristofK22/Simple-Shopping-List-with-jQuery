
$(document).ready(function () {

    // var itemSubTotal = 0;
    var total = 0;

    var subTotal = () => {

        var allItemPrices = $(".Item_Price");
        var allQuantities = $(".Quantity");

        total = 0;

        for (i = 0; i < allQuantities.length; i++) {

            var price = parseFloat($(allItemPrices[i]).text().replace(/\$/," "));
            var subTotal = (parseFloat($(allQuantities[i]).val())) * price;


            if (subTotal > 0 || subTotal < 0) {

                $($(".Item_SubTotal")[i]).text("$ " + subTotal);

            } else if (subTotal === NaN) {

                subTotal = 0;
                $($(".Item_SubTotal")[i]).text("$ --.--");
                
            } else {

                subTotal = 0;
                $($(".Item_SubTotal")[i]).text("$ --.--");

            };

            total += subTotal;

        };

        $($("#Total_Price").text("$ " + total));

        return total;

    };

    var addTo = function(name, priceNew) {

        name = name.charAt(0).toUpperCase() + name.slice(1);
        var newRow = $('<div id="Highlight" class="row Item"> \
            <div class="Item_Name col-xs-3"> \ '
            + name + '\
            </div> \
            <div class="Item_Price col-xs-3"> \
                $' + priceNew + '.00 \
            </div> \
            <div class="Item_Qty col-xs-3"> \
                <label>QTY</label> \
                <input class="Quantity" type="number"> \
            </div> \
            <div class="col-xs-1"> \
                <button class="Remove"> \
                    Remove \
                </button> \
            </div> \
            <div class="Item_SubTotal col-xs-2"> \
            $ --.-- \
            </div> \
        </div>').hide().fadeIn(1777);

        $("#Item_List").prepend(newRow);

    };

    $(document).on('click', '#Add_To', function() {

        addTo($('#Name').val(), $('#Price_New').val());
        
    });

    $(document).on("click", ".Remove", function() {

        $(this).parents(".row").remove();
        subTotal();
        
    });
    
    $(document).on('keyup', '.Quantity', function() {
        
        subTotal();

    });

    $(document).on('change', '.Quantity', function() {
        
        subTotal();

    });

});