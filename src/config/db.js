const mongoose = require('mongoose')

mongoose.connect(process.env.DB)
const db = mongoose.connection

db.on('error', console.error.bind(
    console,
    'But databases error'
))
db.once('open', () => {
    console.log('with mongoDB database')
})

module.exports = db