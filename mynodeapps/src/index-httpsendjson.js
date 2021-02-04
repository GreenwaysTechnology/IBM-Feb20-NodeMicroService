const http = require('http');
const USERS =require('./mock-data/users-mock')


//create server

const server =  http.createServer((req,res)=>{
    //RESPONSE Header to tell what type of data.
    res.writeHead(200, {
        'Content-Type': 'application/json'
    })
    //convert array into json string
    const users = JSON.stringify(USERS);
    res.write(users);
    res.end();
});
//start the server 
server.listen(3000,()=>{
    console.log('Server is Ready!');
})