

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


// class CurrentAccount extends BankCustomer {

//     constructor (name,balance =0){
        
//         super(name,balance)
        
//         }
//         takepersonalloan(amount){
//             console.log('taking personalloan ',amount);

//     }

    
        
    
// }


// const userAnish =new CurrentAccount("Anish K",500)

// console.log(userAnish);
// userAnish.takepersonalloan(5000)


// function BankAccount(customerName, balance = 0) {
//     this.customerName = customerName;
//     this.accountNumber = Date.now();
//     this.balance = balance;
// }

// BankAccount.prototype.deposit = function (amount) {
//     this.balance += amount;
// };

// BankAccount.prototype.withdraw = function (amount) {
//     this.balance -= amount;
// };

// function CurrentAccount(customerName, balance = 0) {
//     BankAccount.call(this, customerName, balance);
//     this.transactionLimit = 50000;
// }

// CurrentAccount.prototype = Object.create(BankAccount.prototype);

// CurrentAccount.prototype.takeBusinessLoan = function (amount) {
//     console.log('Taking business loan: ' + amount);
// };

// function SavingAccount(customerName, balance = 0) {
//     BankAccount.call(this, customerName, balance);
//     this.transactionLimit = 10000;
// }
// SavingAccount.prototype = Object.create(BankAccount.prototype);  ////it copies the prototype of bankaccount

// SavingAccount.prototype.takePersonalLoan = function (amount) {
//     console.log('Taking personal loan: ' + amount);
// };

// const rakeshAccount = new SavingAccount('Rakesh K', 500);
// rakeshAccount.deposit(500);
// rakeshAccount.withdraw(100);
// rakeshAccount.takePersonalLoan(40000);
// // console.log(rakeshAccount);

//-----------------------------------CALL
// function Hi(name) {
//     this.name = name;
//     console.log(`Hi Mr. ${this.name} `);
// }

// function Bi(name) {
    
//     Hi.call(this, name);  //immidiaetly invoking the function hi with the params of bi
   
// }

// const anish = new Bi('Anish');
//B---------------------------------BIND
// function Hi(name) {
//     this.name = name;
//     console.log(`Hi Mr. ${this.name} `);
// }

// function Bi(name) {
    
//    let a = Hi.bind(this, name);  //it will not invoke funtion immidiaetely u can use it afterward storing by calling the instance
//    return a
// }

// const anish = new Bi('Anish');
// anish()
//----------------------------------------------APPLY
function Hi(name) {
    this.name = name;
    console.log(`Hi Mr. ${this.name} `);
}

function Bi([name]) {
    
   let a = Hi.apply(this, [name]);  //it will also invoke a function but takes a array and destruture them to apply with constructor funtion
   return a
}

const anish = new Bi(['anish']);


