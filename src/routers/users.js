const express = require('express')
const usersRouter = express.Router()
const userController = require('../controllers/users')

const { verifyToken } = require('../middlewares/authorize')

usersRouter.get('/:id', verifyToken, userController.getUserByIdController)

module.exports = usersRouter