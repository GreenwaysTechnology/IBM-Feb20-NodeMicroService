const http = require('http');
const { findAll } = require('./services/userservice')

//create server

const server = http.createServer(async (req, res) => {
    //RESPONSE Header to tell what type of data.
    res.writeHead(200, {
        'Content-Type': 'application/json'
    })
    //convert array into json string
    // findAll().then((users)=>{
    //     res.write(users);
    //     res.end();
    // })
    try {
        const users = await findAll();
        res.write(users);
        res.end();
    }
    catch(err){
        res.write({message:'something went wrong'})
        res.end();
    }

});
//start the server 
server.listen(3000, () => {
    console.log('Server is Ready!');
})