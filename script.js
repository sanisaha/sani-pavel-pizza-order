let pizza_price = 7.5;
let topping_price = 0;
let service_price = 0;

// PIZZA SIZE BLOCK
const pizzaPrice = (id, value, title) => {
    const pizzaPrice = document.querySelector('#pizza-price');
    const pizzaDetails = document.querySelector('#pizza-details');
    if (id = 'first'){
        pizzaPrice.textContent = value;
        pizzaDetails.textContent = title;
        pizza_price = +value;
    }
} 

//TOPPINGS BLOCK
let toppingsArr = [];
function selectToppings (value) {
    const toppings = document.querySelector('#toppings');
    const toppingPrice = document.querySelector('#topping-price');

    if (toppingsArr.includes(value)){
        toppingsArr.splice(toppingsArr.indexOf(value), 1); //This is the right way to delete exact item from an array insted of .pop()
    } else {
        toppingsArr.push(value);
    }
        
    let str = '';
    for (const topping of toppingsArr){
        str += topping + ', ';
    }
    toppings.textContent = str;

    if (toppingsArr.length <= 4){
        toppingPrice.textContent = '0 €';
        topping_price = 0;
    }
    else {
        topping_price = 0.5 * (toppingsArr.length - 4);
        toppingPrice.textContent = topping_price.toFixed(2) + '€';
    }
}

// SERVICE BLOCK
const serviceText = document.querySelector('#service');
const servicePrice = document.querySelector('#service-price');

function serviceHandler(service_type){
    if (service_type === 'in'){
        serviceText.textContent = 'Eat in';
        servicePrice.textContent = 0 + " €";
        service_price = 0;
    } else if (service_type === 'pickup'){
        serviceText.textContent = 'Pick up';
        servicePrice.textContent = 0 + " €";
        service_price = 0;
    } else if (service_type === 'home'){
        serviceText.textContent = 'Home delivery';
        servicePrice.textContent = 5 + " €";
        service_price = 5;
    }
    
}


//TOTAL AMOUNT BLOCK
let totalPriceChange = document.querySelectorAll('.part');

//document.querySelectorAll doesn't have addEventListener method. So we have to make for loop to listen all possible events
// When any event comes, we changes the Total amount
for(let i=0; i<totalPriceChange.length; i++){
    totalPriceChange[i].addEventListener('change', priceChange);
}

let totalPrice = document.getElementById('totalPrice');

function priceChange() {
    totalPrice.textContent = (pizza_price + topping_price + service_price).toFixed(2) + ' €';
}
