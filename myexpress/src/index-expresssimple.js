const express  = require('express');

//create application object
const app =  express();

//create End Points

app.get('/',(req,res)=>{
    res.end('Home')
});
app.get('/api/message/hai',(req,res)=>{
    res.end('hai')
});
app.get('/api/message/hello',(req,res)=>{
    res.end('hello')
});
app.get('/api/message/greet',(req,res)=>{
    res.end('greet')
});
app.post('/api/message/save',(req,res)=>{
    res.end('save')
})
app.put('/api/message/update',(req,res)=>{
    res.end('put')
})
app.delete('/api/message/delete',(req,res)=>{
    res.end('delete')
})

//start server

app.listen(3000,()=>console.log('express server is running!!!'))

