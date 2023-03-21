const mongoose = require('mongoose')
const connectToDatabase = () => {
  mongoose.connect('mongodb://localhost:27017/businesses', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
}

module.exports = { connectToDatabase }