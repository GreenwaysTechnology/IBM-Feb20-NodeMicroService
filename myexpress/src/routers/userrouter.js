const express = require('express');
const { findAll } = require('../services/userservice');

//create router object
const userRouter = express.Router();

userRouter.get('/list', async (req, res) => {
    const users = await findAll();
    res.json(users)
});

module.exports = userRouter;