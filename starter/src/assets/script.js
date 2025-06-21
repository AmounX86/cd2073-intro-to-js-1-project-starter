/* Create an array named products which you will use to add all of your product object literals that you create in the next step. */
let cherry = {
  name: "Cherry",
  price: 10.00,
  quantity: 0,
  productId: 1,
  image: "images/cherry.jpg"
}

let orange = {
  name: "Orange",
  price: 9.99,
  quantity: 0,
  productId: 2,
  image: "images/orange.jpg"
}

let strawBerry = {
  name: "Strawberry",
  price: 23.35,
  quantity: 0,
  productId: 3,
  image: "images/strawberry.jpg"
}

let products = [cherry, orange, strawBerry];

/* Create 3 or more product objects using object literal notation 
   Each product should include five properties
   - name: name of product (string)
   - price: price of product (number)
   - quantity: quantity in cart should start at zero (number)
   - productId: unique id for the product (number)
   - image: picture of product (url string)
*/

/* Images provided in /images folder. All images from Unsplash.com
   - cherry.jpg by Mae Mu
   - orange.jpg by Mae Mu
   - strawberry.jpg by Allec Gomes
*/

/* Declare an empty array named cart to hold the items in the cart */
let cart = [];

/**
 * @description Takes the product id and add the correct product and update
 * quantity of the product in the cart (no duplication)
 * @param {integer} productId = product ID
 */
function addProductToCart(productId){
  let cartIndex = cart.findIndex(x=>x.productId == productId);
  let tempProduct = {};
  if(cartIndex < 0){
    tempProduct = products.find(x=>x.productId == productId);
    tempProduct.quantity = 1;
    cart.push(tempProduct);
  }
  else{
    cart[cartIndex].quantity += 1;
  }
}

/**
 * @description Increase the quantity of the product iin the cart by 1
 * @param {integer} productId = product ID
 */
function increaseQuantity(productId){
  let cartIndex = cart.findIndex(x=>x.productId == productId);
  cart[cartIndex].quantity += 1;
}

/**
 * @description decrease product quantity by 1 and if reached zero remove from the cart
 * @param {integer} productId 
 */
function decreaseQuantity(productId){
  let cartIndex = cart.findIndex(x=>x.productId == productId);
  if (cartIndex > -1) {
    cart[cartIndex].quantity -= 1;
    if(cart[cartIndex].quantity <= 0){
      removeProductFromCart(productId);
    }
  }
  
}
/* Create a function named removeProductFromCart that takes in the productId as an argument
  - removeProductFromCart should get the correct product based on the productId
  - removeProductFromCart should update the product quantity to 0
  - removeProductFromCart should remove the product from the cart
*/
/**
 * @description remove the product for the cart
 * @param {integer} productId 
 */
function removeProductFromCart(productId){
  let cartIndex = cart.findIndex(x=>x.productId == productId);
  cart[cartIndex].quantity = 0;
  cart.splice(cartIndex, 1);
}

/**
 * @description calculate the cart total amount
 * @returns {Number}
 */
function cartTotal(){
  let grossTotal = 0;
  cart.forEach((item)=>{
    grossTotal += item.price * item.quantity;
  });
  return grossTotal;
}

/**
 * @description empties the products from the cart
 */
function emptyCart(){
  cart = [];
}

/**
 * @description pay the total amount of the cart
 * @param {number} amount 
 * @returns {number}
 */
function pay(amount){
  return amount - cartTotal();
}
/* Place stand out suggestions here (stand out suggestions can be found at the bottom of the project rubric.)*/
const currencyConverter = {
  oldFactor: 1.0,
  newFactor: 1.0
}

function updatePrices(){
  products.forEach((item)=>{
    item.price = item.price / currencyConverter.oldFactor * currencyConverter.newFactor;
  });
  currencyConverter.oldFactor = currencyConverter.newFactor;
}

function currency(currency){
  switch(currency){
        case 'EUR':
            currencySymbol = '€';
            currencyConverter.newFactor = 1.2
            break;
        case 'YEN':
            currencySymbol = '¥';
            currencyConverter.newFactor = 0.8
            break;
        default:
            currencySymbol = '$';
            currencyConverter.newFactor = 1.0;
            break;
     }
     updatePrices();
}

/* The following is for running unit tests. 
   To fully complete this project, it is expected that all tests pass.
   Run the following command in terminal to run tests
   npm run test
*/

module.exports = {
   products,
   cart,
   addProductToCart,
   increaseQuantity,
   decreaseQuantity,
   removeProductFromCart,
   cartTotal,
   pay, 
   emptyCart,
   /* Uncomment the following line if completing the currency converter bonus */
   currency
}
