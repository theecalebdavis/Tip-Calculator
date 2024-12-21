const form= document.getElementById('tip-form');
const billInput= document.getElementById('bill-amount');
const tipInput= document.getElementById('tip-percentage');
const peopleInput= document.getElementById('people');
const tipAmountEl= document.getElementById('tip-amount');
const totalAmountEl= document.getElementById('total-amount');
const perPersonEl= document.getElementById('per-person')

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const billAmount= parseFloat(billInput.value);
    const tipPercentage= parseFloat(tipInput.value);
    const numberOfPeople= parseInt(peopleInput.value, 10) ;

if (isNaN(billAmount) || billAmount <=0 ||
    isNaN (tipPercentage) || tipPercentage < 0 ||
    isNaN (numberOfPeople)|| numberOfPeople <=0) {
        alert ('please enter valid values for all fields.');
    }
const tipAmount= (billAmount * tipPercentage) /100;
const totalAmount= billAmount + tipAmount;
const perPersonAmount= totalAmount / numberOfPeople;

tipAmountEl.textContent= `Tip Amount: $${tipAmount.toFixed(2)}`;
totalAmountEl.textContent=`Total Amount:$${totalAmount.toFixed(2)}`;
perPersonEl.textContent=`Per Person:$${perPersonAmount.toFixed(2)}`;
});
