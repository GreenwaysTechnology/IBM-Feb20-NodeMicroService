
const http = require('http');
const { log } = console;

const server = http.createServer((req, res) => {

    let body='';
    req.on('data', (chunk) => {
        body += chunk;
        log(body);
    });

    res.on('close', () => {
        log('response close event is called')
    });
    res.on('finish', () => {
        log('response has been sent /committed')
    });
    res.end("Hello,Node")
});

server.listen(3000, () => {
    console.log(`Http Server listens @ ${3000}`)
});