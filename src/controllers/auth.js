const authModel = require('../models/auth')
const responseHelper = require('../helpers/sendResponse')
const bycrpt = require('bcrypt')
const jwt = require('jsonwebtoken')

// registration user
const registerUsersController = async (req, res) => {
    const { body } = req
    let { username, password } = body

    const usernamePattern = /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/

    try {
        const checkUser = await authModel.find({
            username: username
        })

        if (username === '' || password === '') return responseHelper.error(res, 401, 'Need input Username, And password')
        if (checkUser.length !== 0) return responseHelper.error(res, 401, 'Username is Already')
        if (username !== '' && !usernamePattern.test(username)) return responseHelper.error(res, 401, 'Username Invalid')

        password = await bycrpt.hash(password, 6)

        const createUser = new authModel({
            username: username,
            password: password,
            role: 'user'
        })

        const result = await createUser.save()
        return responseHelper.success(res, 200, result)

    }
    catch (err) {
        return responseHelper.error(res, 500, err)
    }
}

// registration admin
const registerAdminController = async (req, res) => {
    const { body } = req
    let { username, password } = body

    const usernamePattern = /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/

    try {
        const checkUser = await authModel.find({
            username: username
        })

        if (username === '' || password === '') return responseHelper.error(res, 401, 'Need input Username, And password')
        if (checkUser.length !== 0) return responseHelper.error(res, 401, 'Username is Already')
        if (username !== '' && !usernamePattern.test(username)) return responseHelper.error(res, 401, 'Username Invalid')

        password = await bycrpt.hash(password, 6)

        const createUser = new authModel({
            username: username,
            password: password,
            role: 'admin'
        })

        const result = await createUser.save()
        return responseHelper.success(res, 200, result)

    }
    catch (err) {
        return responseHelper.error(res, 500, err)
    }
}

const loginController = async (req, res) => {
    const { body } = req
    const { username, password } = body

    try {
        const checkUser = await authModel.findOne({ username: username })
        if (checkUser === null) return responseHelper.error(res, 404, 'Username Not Found')

        const isPasswordValid = await bycrpt.compare(password, checkUser.password)
        if (!isPasswordValid) return responseHelper.send(res, 401, {
            accessToken: null,
            message: 'Password is Wrong'
        })

        const payload = {
            id: checkUser.id,
            username: checkUser.username,
            role: checkUser.role
        }

        const jwtOptions = {
            expiresIn: '24h',
            issuer: process.env.ISSUER
        }

        const token = jwt.sign(payload, process.env.SECRET_KEY, jwtOptions)

        return responseHelper.send(res, 200, {
            id: checkUser.id,
            username: checkUser.username,
            role: checkUser.role,
            accessToken: token
        })

    }
    catch (err) {
        return responseHelper.error(res, 500, err)
    }
}

module.exports = {
    registerUsersController,
    registerAdminController,
    loginController
}