const mongoose = require('mongoose')
require('dotenv').config()
const uri = process.env.MONGODB_CONNECTION_STRING
const connectDB = async () => {
    try {
        await mongoose.connect(uri);
        console.log(`MongoDB connected`);
    } catch (error) {
        console.error(`Error: ${(error as Error).message}`);
        process.exit(1);
    }
};

export { connectDB }