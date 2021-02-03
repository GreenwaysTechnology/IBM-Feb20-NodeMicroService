// const GreeterService = require('./GreeterService')

// let service = new GreeterService();
// console.log(service.sayHai());
// console.log(service.sayGreet())

const {sayGreet,sayHai} = require('./GreeterService');
const {log} = console

log(sayHai());
log(sayGreet())
