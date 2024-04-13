const LoginController = require('../Controllers/LoginController');
const express = require('express');

const LoginRouter = express.Router();

LoginRouter.post('/login', LoginController.login);
LoginRouter.post('/logout', LoginController.logout);


module.exports = LoginRouter;