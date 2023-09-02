//classes was introduced in ES6 as class were already there in diffrent programing languages like JAVA

class BankCustomer {                         // //Object constructor using Class
    constructor(name, balance = 0) {

        this.name = name,
            this.account = Date.now(),
            this.balance = balance;

        this.deposit = function (amount) {
            this.balance += amount;
        };

    }
}

BankCustomer.prototype.withraw= function(amount){         //i added the function in the prototype as deposit which will add the amount to balance
    this.balance-=amount}

const userAnish= new BankCustomer("Anish11",1000)
userAnish.deposit(1000)
userAnish.withraw(5000)
console.log(userAnish);