//In JavaScript, almost everything is an object, and objects can have properties and methods. 
//Every object in JavaScript has a special property called prototype. 
//This prototype property points to another object, and when you access a property or method on an object,
// JavaScript will first look for that property/method on the object itself. 
//If it doesn't find it there, it will look in the object's prototype, and so on up the prototype chain 
//until it finds the property/method or reaches the end of the chain.
//similarily it does the same for functions as functions are itself an object in javaScript


function BankCustomer(name,balance=0){       

    this.name = name,                           
    this.account = Date.now(),
    this.balance = balance

    

}
BankCustomer.prototype.deposit= function(amount){         //i added the function in the prototype as deposit which will add the amount to balance
    this.balance+=amount}

const userAnish = new BankCustomer("Anish K",0)

userAnish.deposit(1000)
console.log(userAnish);  // wondering we made deposit fn on prototype on constructor but using it on userAnish Object directly
                            // so the prototype method looks for method in userAnish object 
                            //if it does not find it will look into prototype until the chain due to inheritance

