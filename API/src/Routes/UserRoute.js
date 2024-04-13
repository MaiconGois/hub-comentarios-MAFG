const express = require('express');
const UserRouter = express.Router();
const UserController = require('../Controllers/UserController');

UserRouter.get('/',UserController.getUsers);
UserRouter.get('/:Id',UserController.getUsersById);

module.exports = UserRouter;
  