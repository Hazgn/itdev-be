const responseHelper = require('../helpers/sendResponse')

const authValidate = (req, res, next) => {
    const { body } = req
    const registerBody = ['username', 'password']
    const bodyProperty = Object.keys(body)
    const isBodyValid =
        registerBody.filter((property) => !bodyProperty.includes(property))
            .length === 0 ? true : false
    if (!isBodyValid) return responseHelper.error(res, 400, 'invalid body')
    next()
}

module.exports = {
    authValidate
}