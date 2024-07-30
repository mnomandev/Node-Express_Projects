const mongoose = require('mongoose')    // Import mongoose



const connectDB = (url)=>{
    return mongoose.connect(url, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    })
}

module.exports = connectDB;