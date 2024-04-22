const UserController = require('../controller/user.controller')
const express = require('express');
const UserRouter = express.Router();

UserRouter.get('/', UserController.getUsers);
UserRouter.get('/:id', UserController.getUserById);
UserRouter.put('/:id', UserController.updateUser);

module.exports = UserRouter;