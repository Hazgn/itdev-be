require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
require('./src/config/db')

const mainRouter = require('./src/routers/main')

const server = express()
const logger = morgan(
    ':method :url :status :res[content-length] - :response-time ms'
)

const port = process.env.PORT || 8000

server.listen(port, () => {
    console.log('server is connected')
})

const corsOptions = {
    origin: '*',
    allowedHeader: 'x-access-token',
    method: ['GET', 'POST', 'PATCH', 'DETELE', 'OPTIONS']
}

server.use(cors(corsOptions))
server.use(express.urlencoded({ extended: true }))
server.use(logger)
server.use(express.json())
server.use(mainRouter)
