
//a =10
//b =20
//a =x
function add(a = 10, b = 20) {
    return a + b;
}

let x = 10;
let y = 90;
add(x, y); //here we pass variables
add(10, 20) // here we pass numbers - hardcoded values

//////
//function as parameter
//greet = hai
function sayHello(greet) {
    greet('hello');
}

let hai = function (name = 'foo') {
    console.log(`Hai ${name}`)
};
//passing function as parameter via variable
sayHello(hai);

//passing value
sayHello(function (name = 'foo') {
    console.log(`Hai inside ${name}`)
})
/////////////////////////////////////////////////////////////////////////////

// string,string,fn,fn
function login(username, password, success, failure) {
    if (username === 'admin' && password === 'admin') {
        success()
    } else {
        failure()
    }
}
login('admin', 'admin', function () {
    console.log(`Login success`)
}, function () {
    console.log(`Login failed`)
});

login('foo', 'bar', function () {
    console.log(`Login success`)
}, function () {
    console.log(`Login failed`)
});

