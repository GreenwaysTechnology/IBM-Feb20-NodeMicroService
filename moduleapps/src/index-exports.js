// const res = require('./info')

// console.log(res)

// console.log(res.message,res.rank,res.isActive,res.doSomething())
const { message, rank, isActive, doSomething, address: { city, state } } = require('./info');

console.log(message, rank, isActive, doSomething(),city,state)
