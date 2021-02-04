const fs = require('fs');
const path = require('path');

//const filePath = './src/assets/info.txt';
const filePath = path.join(__dirname,'assets/info.txt')
const options = {
    encoding: 'utf-8'
}
console.log('start')
fs.readFile(filePath, options, function (err, data) {
    if (err) throw err;
    console.log(data);
});
console.log('end')