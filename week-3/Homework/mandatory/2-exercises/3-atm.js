/*

 Create a simple ATM machine.

 Your ATM should allow you to:
 - Deposit money
 - Withdraw money
 - Check your balance.

 You should start with a balance of 100.0 pounds in your account.

 */

class ATM {
	constructor() {
		this.balance = 100;
	}
	make_deposit(amount) {
		this.balance += amount;
	}
	make_withdrawl(amount) {
		if (this.balance < amount) {
			console.log("Sorry. Your balance is blow this amount");
		} else {
			this.balance -= amount;
		}
	}
	check_balance() {
		console.log(this.balance);
	}
	// Add your code here
}

let atm = new ATM(); // Create the ATM

atm.make_deposit(200);
atm.check_balance();
atm.make_withdrawl(100);

atm.make_withdrawl(500); // Your ATM should be able to handle this scenario
