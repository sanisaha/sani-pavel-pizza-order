
let totalPrice = document.getElementById('totalPrice');
let pizza_price = 7.5;
const topping_price = 0;
const service_price = 0;
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
function selectToppings (id, value) {
    const toppings = document.querySelector('#toppings');
    const toppingPrice = document.querySelector('#topping-price');
    
    if (id = 'goat'){
        if (toppingsArr.includes(value)){
            toppingsArr.pop(value);
        }

        else {
            toppingsArr.push(value);
        }
        
    }
    let str = '';
    for (const topping of toppingsArr){
        str += topping + ' ';
    }
    toppings.textContent = str;
    console.log(toppingsArr.length);
    if (toppingsArr.length <= 4){
        toppingPrice.textContent = 0;
    }
    else {
        toppingPrice.textContent = 0.5 * (toppingsArr.length - 4);
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
    })
    // let totalPrice = document.getElementById('totalPrice')
    // const pizza_price = document.getElementById('pizza-price');
    // const topping_price = document.getElementById('topping-price').innerText;
    // const service_price = document.getElementById('service-price').innerText;
    console.log(pizza_price, topping_price, service_price);