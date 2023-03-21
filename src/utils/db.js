const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config()
const connectToDatabase = () => {
    mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
        console.log('Connected to mongodb')
    }).catch((error) => {
        console.error('Error connecting to mongodb', error)
    })
}

module.exports = { connectToDatabase }