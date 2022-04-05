"use strict";
/**
 * 1.	Constants: Declare a constant & confirm its value cannot be changed.
 */
const num = 10;
console.log(num);
// We will get error saying: "Uncaught TypeError: Assignment to constant variable."
// /**
//  * 2.	Scoping: Declare a variable inside if condition & make sure that it is not 
//  * accessible outside if condition
//  */
function test(num) {
    if (num % 2) {
        let x = num;
        console.log(x);
    }
    else {
        // console.log(x);  // Uncaught ReferenceError: x is not defined
    }
}
//  /**
//   * 3.	Enhanced object properties: Create an ‘Order’ object having data members 
//   * ‘id’, ‘title’, ‘price’. Add the methods printOrder() & getPrice(). Now, 
//   * copy the order object using Object.assign().
//   */
var Order = {
    id: 10,
    title: 'order',
    price: 100,
    printOrder() {
        console.log(this.id + " " + this.title + " " + this.price);
    },
    getPrice() {
        return this.price;
    }
};
var CopyObject = Object.assign(Order);
console.log(CopyObject);
// /**
//  4.	Arrow functions: Take an array of strings & convert it into another array 
//  of object which has two properties {string, string_length}. For example:
// let names = [‘Tom’, ‘Ivan’, ‘Jerry’]
// Output: [ {name: ’Tom’, length: 3}, {name: ’Ivan’, length: 4 }, {name: ’Jerry’, length: 5} ]
//  */
let StringArray = ['Tom', 'Ivan', 'Jerry'];
var arrowFunction = (StringArray) => {
    let resArray = [];
    StringArray.map((ele) => {
        let object = {
            name: "",
            length: 0
        };
        object.name = ele;
        object.length = ele.length;
        resArray.push(object);
    });
    return resArray;
};
console.log(arrowFunction(StringArray));
//  /**
//    5.	Extended parameter handling:
// a.	Write a add() with default values.
// b.	Write a function userFriends() that takes 2 arguments username & array of user friends.
//  The function should print username & his list of friends. (Use rest parameters)
// c.	Write a function printCapitalNames() that takes five names as argument & prints them in 
// capital letters. Use spread operator in order to call printCapitalNames() function.
//   */
// // ans A. Defaul values
function add(a, b = 10) {
    console.log(a + b);
}
add(10, 40);
add(5);
// // ans B. 
function userFriends(username, ...arg) {
    console.log("Name: " + username);
    console.log("Friends: ");
    for (var i in arg) {
        console.log(arg[i]);
    }
}
userFriends("Mohsin", "Nusair", "basha", "shaik");
//  //ans C.
function printCapitalNames(name1, name2, name3, name4, name5) {
    console.log("Names after");
    console.log(name1.toUpperCase() + " " + name2.toUpperCase() + " " + name3.toUpperCase() + " " + name4.toUpperCase() + " " + name5.toUpperCase());
}
var nameList = ["Mohsin", "Nusair", "basha", "shaik", "prajwal"];
console.log("Names Before: ", nameList);
printCapitalNames(...nameList);
// /**
//  * 6.	Template literals: Draft a ticket to Sysnet that describes problem with your laptop. 
//  * Use ‘template literals’ to add value of laptop model, your desk no, your name etc.
//  */
let laptop_model = "ASUS TUF505DV";
let deskNo = 10;
let name = "Mohsin";
console.log(`TICKET:
Problem: laptop screen is flickering
laptop Model: ${laptop_model}
deskNo: ${deskNo}
Name: ${name}`);
// /**
//  * 7.	De-structuring assignment:
// a.	Suppose there is a javascript array with 4 elements. Print the value of 3rd element 
// using array matching.
// b.	Create an organization object having attributes name, address. Write a program to 
// retrieve pin code of an address using object deep matching.
//  */
// ans a.
var names = ["ASAP", "ROCKY", "LAFLAME", "LEE"];
var [firstele, secondele, thirdele, fourthele] = names;
console.log(thirdele);
// //Ans b.
var organization = {
    name: "capgemini",
    address: {
        city: "chidambram",
        state: "tamilnadu",
        pincode: 608001
    }
};
const { address: { city: city1, state: state1, pincode: pincode1 } } = organization;
console.log(pincode1);
// /**
//  * 8.	Classes & Modules: Write a class Account with attributes id, name, balance. 
//  * Add two sub classes SavingAccount & CurrentAccount having specific attribute 
//  * interest & cash_credit respectively. Create multiple saving & current account objects. 
//  * Write a functionality to find out total balance in the bank.
//  */
class Account {
    constructor(id, name, balance) {
        this.id = id;
        this.name = name;
        this.balance = balance;
    }
}
class SavingAccount extends Account {
    constructor(id, name, balance, interest) {
        super(id, name, balance);
        this.interest = interest;
    }
    getBalance() {
        this.totalBalance = 0;
        this.totalBalance = this.balance + (this.balance * this.interest);
        return this.totalBalance;
    }
}
class CurrentAccount extends Account {
    constructor(id, name, balance, cash_credit) {
        super(id, name, balance);
        this.cash_credit = cash_credit;
    }
    getBalance() {
        this.totalBalance = 0;
        this.totalBalance = this.balance - this.cash_credit;
        return this.totalBalance;
    }
}
var SavingAccountObj = new SavingAccount(11, "Mohsin", 9000, 10);
console.log(SavingAccountObj.getBalance());
var CurrentAccountObj = new CurrentAccount(11, "Nusair", 70000, 100);
console.log(CurrentAccountObj.getBalance());
