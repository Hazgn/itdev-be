const autModel = require('../models/auth')
const responseHelper = require('../helpers/sendResponse')

const getUserByIdController = async (req, res) => {
    const { userInfo } = req
    const { id } = userInfo
    try {
        const result = await autModel.find({ _id: id })
        const showData = {
            id: result[0]._id,
            username: result[0].username,
            role: result[0].role
        }
        return responseHelper.success(res, 200, showData)
    }
    catch (err) {
        return responseHelper.error(res, 500, err)
    }
}

module.exports = {
    getUserByIdController
}