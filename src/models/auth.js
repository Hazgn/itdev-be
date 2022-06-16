const mongoose = require('mongoose')

const userSceme = mongoose.Schema({
    username: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    role: {
        type: String,
        require: true
    },
    createAt: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('users', userSceme)