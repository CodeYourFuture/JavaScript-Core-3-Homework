/*

 Create a simple ATM machine.

 Your ATM should allow you to:
 - Deposit money
 - Withdraw money
 - Check your balance.

 You should start with a balance of 100.0 pounds in your account.

 */

class ATM {
    // Add your code here
  constructor(balance) {
        balance = 100.0;
        this.balance = balance;
        console.log(this.balance);
    }

    make_deposit(p) {
        const {
            balance
        } = this;
        this.balance = this.balance + p;
        console.log(this.balance);
    }

    check_balance() {
        const {
            balance
        } = this;
        console.log(this.balance);
    }

    make_withdrawl(m) {
        const {
            balance
        } = this;
        this.balance = this.balance - m;
        console.log(this.balance);
    }

}


let atm = new ATM(); // Create the ATM

atm.make_deposit(200);
atm.check_balance();
atm.make_withdrawl(100);

atm.make_withdrawl(500); // Your ATM should be able to handle this scenario