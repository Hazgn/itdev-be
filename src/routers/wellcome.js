const express = require("express")

const wellcomRouter = express.Router()
const wellcomController = require('../controllers/wellcome')

wellcomRouter.get('/', wellcomController.greeting)

module.exports = wellcomRouter