const responseHelper = require('../helpers/sendResponse')

const greeting = (req, res) => {
    responseHelper.success(res, 200, 'wellcome to api itdev-be')
}

module.exports = { greeting }