const currencyEL_one = document.getElementById('currency-one');
const amountEL_one = document.getElementById('amount-one');
const currencyEL_two = document.getElementById('currency-two');
const amountEL_two = document.getElementById('amount-two');

const rateEL = document.getElementById('rate')
const swap = document.getElementById('swap')


//fetch exchange rate and update the amount
function calculate(){
    const currency_one = currencyEL_one.value;
    const currency_two = currencyEL_two.value;

    fetch(`https://v6.exchangerate-api.com/v6/8742a4675dd4168ee1aea9ad/latest/USD`)
        .then(res => res.json()) //json 方式
        .then(data =>{
            // console.log(data);
            const rate =data.conversion_rates[currency_two]; //記得要用[] 而不是()
            rateEL.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;

            amountEL_two.value = (amountEL_one.value * rate).toFixed(2);

        })

    // console.log(currency_one, currency_two);
}

//eventListener
currencyEL_one.addEventListener('change', calculate)
amountEL_one.addEventListener('input', calculate)
currencyEL_two.addEventListener('change', calculate)
amountEL_two.addEventListener('input', calculate)
swap.addEventListener('click', ()=>{

    const temp =currency_one.value
    currency_one.value = currency_two.value;
    currency_two.value = temp;
})


calculate();