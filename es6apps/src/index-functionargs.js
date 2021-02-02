
//message is variable : arg variable
function sayHello(message) {
    console.log(`Message is ${message}`)
}

//'Hello' is parameter
sayHello('Hello');
sayHello();

//default args
function multiply(a = 0, b = 0) {
    let res = a * b;
    console.log(`Result ${res}`)
}
multiply(10, 10)
multiply();

//i want function that , how many parameters i am going to pass, i dont know in advance
//rest operator...(var args)
function log(...message) {
    console.log(message)
}
log('app')
log('app', 'error')
log('app', 'error', 'in myfile.txt')