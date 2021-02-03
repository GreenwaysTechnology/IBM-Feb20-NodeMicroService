//timer and style is callback.

// function delay(callback) {
//     setTimeout(callback, 1000,'I am delayed');
// }
const delay = callback => setTimeout(callback, 1000, 'I am delayed')
//passing function
console.log('start')
delay(data => console.log(data));
console.log('end')
