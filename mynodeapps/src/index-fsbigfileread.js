const fs = require('fs');
const path = require('path');
const { log } = console;

const fileName = path.join(__dirname, 'assets/big.file');
const config = {
    encoding: 'UTF-8'
}

const inputStream = fs.createReadStream(fileName, config);

//read data ; you need to register listeners for io.

//data event is emitted by os for each chunk of data
inputStream.on('data', function (chunk) {
    log(`Received ${chunk.length} bytes of data.`)
})

//end event is called , no more chunk of data is availble.
inputStream.on('end', () => {
    log('There will be no more data to read!');
})

//error event: for error handling
inputStream.on('error', (err) => {
    log(`Some thing went wrong! ${err}`)
});