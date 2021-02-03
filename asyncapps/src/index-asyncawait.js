
async function getValue() {
    return 100;  // return Promise.resolve(100)
}
async function getSomething() {
    return Promise.resolve('something')
}

function getUser() {
    return Promise.resolve({ id: 1, name: 'admin' })
}

console.log(getValue());
getValue()
    .then(data => console.log(data));

getSomething()
    .then(data => console.log(data));
//how to read data from promise

//async....await

async function init() {
    const user = await getUser();
    console.log(user);
}
init();


