//arrow functions
//es 5 function literal
let hello = function () {
    console.log('hello')
};
hello();
//arrow function simplied syntax of old function arrow.
let hai = () => {
    console.log('hai')
};
hai();
//flavours of arrow function. 

//1.if function has only single line body,drop {}
hai = () => console.log('hai')
hai();
////args,parameters
//mulitple args with default value
let add = (a = 0, b = 0) => {
    let res = a + b;
    console.log(res);
};
add();
add(10, 4)
//single parameter without default value, drop ()
let welcome = name => console.log(name);
welcome('subramanian')
///////////////////////////////////////////////////////////////////////////////
//return statment
let getStock = () => {
    return 100;
}
console.log(getStock());
//if arrow has return statment only, no more body,drop {} and return statement
getStock = () => 100;
console.log(getStock());
/////////////////////////////////////////////////////////////////////////
//single args, return the same
let getMoney = value => value;
console.log(getMoney(1222));
//////////////////////////////////////////////////////////////////////////////////

// function fooExecutor(myfoo) {
//     myfoo();
// }
let fooExecutor = myfoo => myfoo();

let foo = (name = 'foo') => console.log(`Hai ${name}`)
//passing function as parameter via variable
fooExecutor(foo);

// string,string,fn,fn
let login = (username, password, success, failure) => {
    if (username === 'admin' && password === 'admin') {
        success()
    } else {
        failure()
    }
}
login('admin', 'admin', () => console.log(`Login success`)
    , () => console.log(`Login failed`));

login('foo', 'bar', () => console.log(`Login success`)
    , () => console.log(`Login failed`));
















