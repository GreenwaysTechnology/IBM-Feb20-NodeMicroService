const http = require('http');

//create server
//req = is variable points ClientRequest Object
//res = is variable points ServerResponse
const server =  http.createServer((req,res)=>{
    res.write('Hello');
    res.end();
});
//start the server 
server.listen(3000,()=>{
    console.log('Server is Ready!');
})