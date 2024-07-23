const mongoose = require('mongoose')

const connectToDatabase = async () => {
    try {
        await mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@tasksmanager.4ivu5xw.mongodb.net/?retryWrites=true&w=majority&appName=TasksManager`)
        console.log('Connected to MongoDB!')
    } catch (e) {
        console.error('Error connecting to MongoDB:', error)
    }
};

module.exports = connectToDatabase