/*

Complete the rest of this code to create an online shopping cart.

The output of running your code should be:

    Your shopping cart has 3 items: Toilet Roll, Pasta, Eggs

    
*/

class ShoppingCart {
  
  list=[];
  addItem(value){
    this.list.push(value);
  }
  cartContains() {
   
    console.log(`Your Shoping cart has ${this.list.length} items:${this.list[0]}, ${this.list[1]}, ${this.list[2]}`)
    
  }
}

let myCart = new ShoppingCart(); // Creates an empty shopping cart
myCart.addItem("Toilet Roll");
myCart.addItem("Pasta");
myCart.addItem("Eggs");

myCart.cartContains();
