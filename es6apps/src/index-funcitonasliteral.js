
//way-1
function sayHello(name = 'foo') {
    console.log('hello', name);
    return 'welcome'
}
//assign function to another variable
let hello = sayHello;
console.log(hello('subramanian'))

//way 2
//anonomous function ; funciton without name
let greeter = function (message='bar') {
    console.log(`${message}`)
    return 'bar foo'
};
greeter();
greeter('foo');
console.log(greeter('subramanian'))