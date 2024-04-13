const express = require('express')
const CommentController = require('../Controllers/CommentController')


const CommentRouter = express.Router()
CommentRouter.get('/', CommentController.getComments)

module.exports = CommentRouter