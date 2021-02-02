//object template - class...
//how create object ; using function.

function Employee() {
    //declare instance variables and methods
    this.id = 1;
    this.name = 'ram';
    //methods
    this.calculateSalary = function () {
        return 1000;
    }
}
//create object...
//emp is reference variable
//new is operator 
//Employee() - constructor call - function call
let emp = new Employee();
console.log(`id ${emp.id}`)
console.log(`Name ${emp.name}`)
console.log(`Salary ${emp.calculateSalary()}`)

// ES  6 Class

class Customer {
    //declare instance variables and methods
    id = 1;
    name = 'ram';
    //methods
    // calculateSalary = function () {
    //     return 1000;
    // }
    // calculateSalary = () => {
    //     return 1000;
    // }
    calculateInvoice() {
        return 1000;
    }

}
let cust = new Customer();
console.log(`id ${cust.id}`)
console.log(`Name ${cust.name}`)
console.log(`Salary ${cust.calculateInvoice()}`)

////////////////////////////////////////////////////////////////////////////////
//literal syntax.
//variable: literal

let product = {
    id: 1,
    name: 'phone',
    // getQty: function () {
    //     return 100;
    // }
    getQty: () => {
        return 100;
    },
    calculateInvoice() {
        return 1000;
    }
};
console.log(`id ${product.id}`)
console.log(`Name ${product.name}`)
console.log(`Qty ${product.getQty()}`)
console.log(`Invoice ${product.calculateInvoice()}`)

///////////////////////////////////////////////////////////////////////////////////////////////////
