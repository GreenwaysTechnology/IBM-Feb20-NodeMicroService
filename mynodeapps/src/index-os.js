const { arch,hostname,cpus } = require('osxx');

console.log('Operating system infromation')
console.log(arch())
console.log(hostname())
console.log(cpus())