const jwt = require('jsonwebtoken')
const responseHelper = require('../helpers/sendResponse')

const verifyToken = (req, res, next) => {
    const token = req.header('x-access-token')
    if (!token) return responseHelper.error(res, 401, 'No token provided!')

    jwt.verify(token, process.env.SECRET_KEY, (err, payload) => {
        if (err) return responseHelper.error(res, 401, 'You need to login first')
        req.userInfo = payload
        next()
    })
}

module.exports = {
    verifyToken
}