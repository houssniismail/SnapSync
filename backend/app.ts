import express from "express";
import router from "./router/index";
import dotenv from "dotenv";
dotenv.config();
const port = process.env.port || 3000;
const { connectDB } = require('./config/DB')
const app = express();
app.use(express.json())
app.use(express.urlencoded({extended:true}))
connectDB()
app.use('/',router)
app.listen(port, () => {
    console.log(`starting on port http://localhost:${port}`)
})
