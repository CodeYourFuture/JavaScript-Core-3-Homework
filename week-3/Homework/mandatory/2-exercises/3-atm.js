/*

 Create a simple ATM machine.

 Your ATM should allow you to:
 - Deposit money
 - Withdraw money
 - Check your balance.

 You should start with a balance of 100.0 pounds in your account.

 */
class Animal { 
    constructor(name) {
      this.name = name;
    }
    
    speak() {
      console.log(`${this.name} makes a noise.`);
    }
  }

  
  let d = new Animal('Mitzie');
  d.speak();

class ATM {
    constructor(amount) {
        this.amount = amount;
      }
    // Add your code here
    make_deposit() {
        console.log(`${this.amount}`)
        
      }
      check_balance() {
        console.log(`${this.amount}`)
      }
      make_withdraw() {
        console.log(`${this.amount}`)
      }
    
}

let atm = new ATM(); // Create the ATM

atm.make_deposit(200);
atm.check_balance();
atm.make_withdraw(100);
atm.make_withdraw(500); // Your ATM should be able to handle this scenario