
let amountinput = document.querySelector('.amountinput');
let from = document.querySelector('.from');
let To = document.querySelector('.to');
let result = document.querySelector('.finalresult');
let  convert = document.querySelector('convert');
const api = "https://api.exchangerate-api.com/v4/latest/USD";
let resultFrom;
let resultTo; 
let resultValue; 

from.onchange = addEventListener('change', function(event) {
    resultFrom = `${event.target.value}`;
})

To.onchange = addEventListener('change', function(event) {
    resultTo = `${event.target.value}`;
})

amountinput.oninput = addEventListener('input', Updatevalue())

function Updatevalue(e) {
     resultValue = e.target.value;
}

convert.onclick = addEventListener('click', getResult())

function getResult() {
    fetch(`${api}`)
    .then(currency => {
        return currency.json()
    }).then(displayresult())

}

function displayresult() {
    fromRate = currency.Rates[resultFrom]
    ToRate = currency.Rates[resultTo]
    result.innerHTML = ((fromRate / ToRate) * resultValue).toFixed(2)
    result.style.display = 'block';
}

function clearresult() {
    window.location.reload
  document.querySelector('.finalresult').innerHTML = ""
}