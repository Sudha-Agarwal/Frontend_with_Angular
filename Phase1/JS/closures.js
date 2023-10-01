function greeting(){
    let message = 'Hi';

    function sayHi(){
        console.log(message);
    }
    return sayHi;
}

let res = greeting();
res();

//Banking example
class Account{
    balance;
     deposit(amount){
        this.balanace++;
    }
    withdrwa(amount){
        this.balance--;
    }
}

let obj = new Account();
obj.deposit(100)
obj.withdrwa(10);
obj.balance = 1000;
console.log(obj.balance);


//with closures
const manageAccount = function(initialBal){
    let balance = initialBal;

    return {
        getBalance: function(){return balance;}
    }


}



