const express = require('express')
const CommentRouter = express.Router()
const CommentController = require('../Controllers/CommentController')


CommentRouter.get('/', CommentController.getComments)

module.exports = CommentRouter