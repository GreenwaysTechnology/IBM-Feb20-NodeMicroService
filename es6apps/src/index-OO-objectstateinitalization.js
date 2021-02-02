//how to initalize the state
//hard coded
//after object creation
//during constructor call.

//hardcoded
// function Employee() {
//     //declare instance variables and methods
//     this.id = 1;
//     this.name = 'ram';
//     //methods
//     this.calculateSalary = function () {
//         return 1000;
//     }
// }

function Employee(id = 1, name = 'ram') {
    //declare instance variables and methods
    this.id = id;
    this.name = name;
    //methods
    this.calculateSalary = function () {
        return 1000;
    }
}


let emp = new Employee();
console.log(`id ${emp.id}`)
console.log(`Name ${emp.name}`)
console.log(`Salary ${emp.calculateSalary()}`)
//after object creation
emp.id = 9999;
emp.name = 'Subramaian';
console.log(`id ${emp.id}`)
console.log(`Name ${emp.name}`)

//constructor parameter
emp = new Employee(23, 'John')
console.log(`id ${emp.id}`)
console.log(`Name ${emp.name}`)
///////////////////////////////////////////////////////////////////////////////////

// class Customer {
//     //declare instance variables and methods
//     id = 1;
//     name = 'ram';
//     calculateInvoice() {
//         return 1000;
//     }
// }
class Customer {
    //declare instance variables and methods
    constructor(id = 1, name = 'ram') {
        this.id = id;
        this.name = name;
    }
    calculateInvoice() {
        return 1000;
    }
}

let cust = new Customer();
console.log(`id ${cust.id}`)
console.log(`Name ${cust.name}`)
console.log(`Salary ${cust.calculateInvoice()}`)
cust.id = 19999;
cust.name = 'Karthik'
console.log(`id ${cust.id}`)
console.log(`Name ${cust.name}`)

cust = new Customer(23, 'Miller')
console.log(`id ${cust.id}`)
console.log(`Name ${cust.name}`)











