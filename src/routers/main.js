const express = require('express')
const mainRouter = express.Router()

// routers endpoint declaration
const wellcomeRouter = require('./wellcome')
const authRouter = require('./auth')
const usersRouter = require('./users')

// use endpoint router
mainRouter.use('/wellcome', wellcomeRouter)
mainRouter.use('/auth', authRouter)
mainRouter.use('/users', usersRouter)

mainRouter.get('/', (req, res) => {
    res.redirect('wellcome')
})

module.exports = mainRouter