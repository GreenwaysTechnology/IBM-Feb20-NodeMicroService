const express = require('express');
const userRouter = require('./routers/userrouter');
const todoRouter = require('./routers/todorouter')
const bookRouter = require('./routers/booksrouter')
const bodyParser = require('body-parser')

const app = express();

//body parser registeration
// parse application/json
app.use(bodyParser.json())


//Linking UserRouter with main app
app.use('/api/users',userRouter);
app.use('/api/todos',todoRouter);
app.use('/api/books',bookRouter);


app.listen(3000, () => console.log('Express server is running!!!'))


