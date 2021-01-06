
//1. .ajax exchange the rate and updata the DOM



// console.log(currency_one,currency_two)
//event listener -change
$('#currency-one, #currenecy-two').change(function(){
    var currency_one =  $('#currency-one').val();
    var currency_two =  $('#currency-two').val();   
    console.log($(this).val() );
    $.ajax({
        method: "GET",
        url: 'https://api.exchangerate-api.com/v4/latest/'+currency_one
        }).done(function(data){
            console.log(data);
        }).done(function(data){
            const rate = data.rates[currency_two];
            // console.log(rate);
            $('#rate').text('1'+ currency_one +' = '+rate +currency_two);

        })
});
$(":input").change(function(){
    var currency_one =  $('#currency-one').val();
    var currency_two =  $('#currency-two').val();   
    var amountEL_one = $('#amount-one').val();
    var amountEL_two = $('#amount-two').val();
    console.log($(this).val() );
    $.ajax({
        method: "GET",
        url: 'https://api.exchangerate-api.com/v4/latest/'+currency_one
        }).done(function(data){
            const rate = data.rates[currency_two];
            // console.log(rate);
            $('#rate').text('1'+ currency_one +' = '+rate +currency_two);

        }).done(function(data){
            const rate = data.rates[currency_two];
            // console.log(rate);
            amountEL_two = ((amountEL_one) * rate).toFixed(2);
            console.log(amountEL_two);

            $('#amount-two').val(amountEL_two);
        })
});
    //jquery 裡沒有fetch() 是.ajax()

    $('#swap').click(function(){
        var currency_one =  $('#currency-one').val();
        var currency_two =  $('#currency-two').val(); 

        $('#currency-one').val('currency_one');
        $('#currency-two').val('currency_two');
        
        console.log(currency_one);
        const temp =currency_one;
        currency_one = currency_two;
        currency_two = temp;
    })
        
    




