const mongoose = require('mongoose')
require('dotenv').config()
const uri = process.env.MONGO_URI
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