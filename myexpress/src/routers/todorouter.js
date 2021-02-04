const express = require('express');
const { listTodos,save } = require('../services/todoservice');

//create router object
const todoRouter = express.Router();

todoRouter.get('/list', async (req, res) => {
    const todos = await listTodos();
    res.json(todos)
});
todoRouter.post('/save', (req, res) => {
    const todo = req.body; // will have parsed json data ,done by body parser middleware.
    save(todo)
    res.end('saved');
});

module.exports = todoRouter;