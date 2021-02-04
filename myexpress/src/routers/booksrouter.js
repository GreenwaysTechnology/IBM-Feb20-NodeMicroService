const express = require('express');
const {findAll} = require('../services/bookservice');

//create router object
const bookRouter = express.Router();

bookRouter.get('/list', async (req, res) => {
    const books = await findAll();
    res.json(books)
});


module.exports = bookRouter;