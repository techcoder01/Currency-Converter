const currencyOne = document.getElementById('currency-one')
const currencyTwo = document.getElementById('currency-two')

const AmountOne = document.getElementById('amount-one')
const AmountTwo = document.getElementById('amount-two')

const rate = document.getElementById('rate');
const swap = document.getElementById('swap');


// Fetch Exchange Rate and Update the DOM
function calculate (){
    const currency_one = currencyOne.value;
    const currency_two = currencyTwo.value;

    fetch(`https://v6.exchangerate-api.com/v6/342f093b609a726250102ed4/latest/${currency_one}`)
    .then(res => res.json())
    .then(data => {
        const rates = data.conversion_rates[currency_two]

        rate.innerText = `1 ${currency_one} = ${rates} ${currency_two}`;        

        AmountTwo.value = (AmountOne.value * rates).toFixed(2);
    })
}

//Event Listeners

currencyOne.addEventListener('change', calculate)
currencyTwo.addEventListener('change', calculate)
AmountOne.addEventListener('input', calculate)
AmountTwo.addEventListener('input', calculate)


swap.addEventListener('click', () => {
    [currencyOne.value, currencyTwo.value] = [currencyTwo.value, currencyOne.value];
    calculate();
});

calculate();