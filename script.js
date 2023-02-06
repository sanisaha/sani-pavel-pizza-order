let pizza_price = 7.5;
let topping_price = 0;
let service_price = 0;
const pizzaPrice = (id, value, title) => {
    const pizzaPrice = document.querySelector('#pizza-price');
    const pizzaDetails = document.querySelector('#pizza-details');
    if (id = 'first'){
        pizzaPrice.textContent = value;
        pizzaDetails.textContent = title;
        pizza_price = +value;
    }
} 
let toppingsArr = [];
function selectToppings (value) {
    const toppings = document.querySelector('#toppings');
    const toppingPrice = document.querySelector('#topping-price');

    if (toppingsArr.includes(value)){
        toppingsArr.splice(toppingsArr.indexOf(value), 1); //This is the right way to delete exact item from an array insted of .pop()
        console.log(toppingsArr);
    } else {
        toppingsArr.push(value);
        console.log(toppingsArr);
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
const deliveryPrice = document.querySelector('#service-price');
const service = document.querySelector('#service');

const serviceDetails = document.querySelector('#selectService');
const homeService = document.getElementById('home');
const eatService = document.getElementById('eat');
const pickService = document.getElementById('pick');

serviceDetails.addEventListener('change', function getPrice(){
    deliveryPrice.innerText = this.value;
    service_price = +this.value;
})

let totalPriceChange = document.querySelectorAll('.part');
console.log(totalPriceChange);

//document.querySelectorAll doesn't have addEventListener method. So we have to make for loop to listen all possible events
for(let i=0; i<totalPriceChange.length; i++){
    totalPriceChange[i].addEventListener('change', priceChange);
}

let totalPrice = document.getElementById('totalPrice');

function priceChange() {
    totalPrice.textContent = (pizza_price + topping_price + service_price).toFixed(2) + ' €';
}
