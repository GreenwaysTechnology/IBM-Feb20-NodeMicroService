const fs = require('fs');
const path = require('path');

//const filePath = './src/assets/info.txt';
const filePath = path.join(__dirname, 'assets/infocopy.txt')
const options = {
    encoding: 'utf-8'
}
const data = 'Hello,How are you';

fs.writeFile(filePath, data, options, err => {
  if (err) throw err;
  console.log(`data has been written into ${filePath}`)
})