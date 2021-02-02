//object destructing
// function printEmployee(employee) {
//     console.log(`id : ${employee.id}`)
//     console.log(`name : ${employee.name}`)
//     console.log(`City : ${employee.address.city}`)
// }

// function printEmployee(employee) {
//     //object destructure ; breaking object properties
//     const { id, name, address } = employee;
//     console.log(`id : ${id}`)
//     console.log(`name : ${name}`)
//     console.log(`City : ${address.city}`)
// }
// function printEmployee({ id, name, address: { city } }) {
//     //object destructure ; breaking object properties
//     console.log(`id : ${id}`)
//     console.log(`name : ${name}`)
//     console.log(`City : ${city}`)
// }
const printEmployee = ({ id, name, address: { city } }) => {
    //object destructure ; breaking object properties
    console.log(`id : ${id}`)
    console.log(`name : ${name}`)
    console.log(`City : ${city}`)
}


printEmployee({ id: 1, name: 'Subramanian', address: { city: 'coimbatore' } })
////////////////////////////////////////////////////////////////////////////////////

//Return object from function with destructuring

let getProduct = () => {
    return {
        id: 'A001',
        name: 'MyProduct'
    }
};
console.log(getProduct())

//only return statment
getProduct = () => ({
    id: 'A001',
    name: 'MyProduct'
});
console.log(getProduct())
//dynamic parameters
getProduct = (id = 'A001', name = 'MyProduct') => ({
    id: id,
    name: name
});
console.log(getProduct())
console.log(getProduct('A004', 'Phone'))

//simpilfied version
//if local variable and instance variable same;
//left : right  === equal =>make it one
getProduct = (id = 'A001', name = 'MyProduct') => ({
    id,
    name
});
console.log(getProduct('A004', 'Phone'))
/////////////////////////////////////////////////////////////////////////////
//how to use destrucing for classes
class OrderService {
    constructor() {
    }
    findAll() {
        return 'findAll'
    }
    save() {
        return 'save'
    }
}
let service = new OrderService();
console.log(service.findAll());
console.log(service.save());

//object destructed syntax
let { findAll, save } = new OrderService();
console.log(findAll());
console.log(save());















