/*

Complete the rest of this code to create an online shopping cart.

The output of running your code should be:

    Your shopping cart has 3 items: Toilet Roll, Pasta, Eggs

    
*/

// let Shopping = {
//   ToiletRoll:"Toilet Roll",
//   Pasta:"Pasta", 
//   Eggs:"Eggs"
// }
class ShoppingCart {
  // Add your code here
  cartContains() {
    // Use console.log() to output everything contained in your cart
    console.log(ShoppingCart())
  }
}

let myCart = new ShoppingCart(); // Creates an empty shopping cart
console.log(myCart);

myCart.addItem("Toilet Roll");
myCart.addItem("Pasta");
myCart.addItem("Eggs");

myCart.cartContains();
