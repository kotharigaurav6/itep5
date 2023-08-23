// Examples based on prototypes

function Bank(acct_no,balance){
    this.acct_no = acct_no;
    this.balance = balance;
}
Bank.prototype.showBalance = function(){
    console.log(`Your account ${this.acct_no} have Balance of $${this.balance}`);
}
Bank.prototype.withDraw = function(withDraw_amount){
    if(withDraw_amount>this.balance)
        console.log(`Low Balance..Needs to Deposit`);
    else{
        this.balance-=withDraw_amount;
        console.log(`Amount of $${withDraw_amount} is withdrawal from account no. ${this.acct_no}`);
        console.log(`Available Balance is of $${this.balance}`);
    }
}
Bank.prototype.deposit = function(deposit_amount){
    this.balance+=deposit_amount;
    console.log(`Your account ${this.acct_no} is credited with $${deposit_amount} and available balance is $${this.balance}`);
}
const bank = new Bank("SBI00123",10000);
bank.showBalance();
bank.withDraw(5000);
bank.deposit(200);