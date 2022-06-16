const express = require('express')
const authRouter = express.Router()
const authController = require('../controllers/auth')
const { authValidate } = require('../middlewares/validate')

authRouter.post('/register', authValidate, authController.registerUserConstroller)
authRouter.post('/register/admin', authValidate, authController.registerAdminConstroller)
authRouter.post('/login', authValidate, authController.loginController)

module.exports = authRouter