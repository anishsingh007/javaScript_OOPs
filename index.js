function BankCustomer(name,balance=0){       //Object constructor using Function

    this.name = name,                           //this keyword refers to the object this.property any name will store the input from the instance 
    this.account = Date.now(),
    this.balance = balance

    this.deposit = function(amount){            //deposit is the method 'Any Function attached to object or class is Method
        this.balance+=amount
    }

}

const userAnish = new BankCustomer("Anish K",0)

userAnish.deposit(1000);
userAnish.deposit(1000);
console.log(userAnish);
//console.log(typeof userAnish.balance)


// class BankCustomer {                         // //Object constructor using Class
//     constructor(name, balance = 0) {

//         this.name = name,
//             this.account = Date.now(),
//             this.balance = balance;

//         this.deposit = function (amount) {
//             this.balance += amount;
//         };

//     }
// }