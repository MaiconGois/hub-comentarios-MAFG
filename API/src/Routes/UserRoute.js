const express = require('express');
const router = express.Router();
const UserController = require('../Controllers/UserController');


router.get('/',UserController.getUsers);

module.exports = router;
  