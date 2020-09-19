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
    balance;
    constructor(){
        this.balance=100;
    }
    make_deposit(add){
        this.balance=this.balance+add
    }
    check_balance(){
        console.log("£"+this.balance)
    }
    make_withdrawl(out){
        if(this.balance-out>0){
            this.balance=this.balance-out;
        }else{
            console.log("sorry:your total balance is "+this.balance);
        }
    }
}

let atm = new ATM(); // Create the ATM

atm.make_deposit(200);
atm.check_balance();
atm.make_withdrawl(100);

atm.make_withdrawl(500); // Your ATM should be able to handle this scenario