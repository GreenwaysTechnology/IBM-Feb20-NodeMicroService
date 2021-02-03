//promise object
//using factory methods
//promise replaces callback function passing


// function getSuccess(callback) {
//     //factory
//     setTimeout(callback, 0, "Success")
// }

// getSuccess(data => console.log(data));

function getSuccess() {
    //factory
    return Promise.resolve('Success')
}
function getError() {
    //factory
    return Promise.reject('something went wrong!!')
}

function validate() {
    let userName = "admin";
    let password = "admin";
    if (userName === 'admin' && password === 'admin') {
        return Promise.resolve('Login success')
    }
    return Promise.reject('Login failed')
}


//
// let result = getSuccess();
// console.log(result)
// result.then(data=>console.log(data))
console.log('start')
getSuccess()
    .then(data => console.log(data));

getError()
    .catch(err => console.log(err));

validate()
    .then(status => console.log(status))
    .catch(err => console.log(err))
    .finally(() => console.log('done'))
console.log('end')
///////////////////////////////////////////////////////////////////////////////////
//Promise constructors pattern is used to abstract existing callback based programming.

function delay(callback) {
    //i want to return some data using timer after 5000ms
    setTimeout(callback, 5000, "Hello")
}
function delayWithPromise() {
    return new Promise((resovle, reject) => {
        setTimeout(resovle, 5000, "Hello")
    });
}

delay(data => console.log(data))

delayWithPromise()
    .then(data => console.log(data))
    .catch(err => console.log(err))
    .finally(() => console.log('done'));





