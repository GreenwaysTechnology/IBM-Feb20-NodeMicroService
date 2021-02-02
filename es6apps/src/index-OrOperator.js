//

let isActive = true;
let isEnabled = false
let res = isActive || isEnabled;
console.log(`The result is ${res}`)

let greet='welcome';
/**
 * if first operand (greet) is truthy,
 * then result would be first itself,else second
 */
let message = greet || 'Hello'

console.log(message);