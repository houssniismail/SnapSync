import path from 'path';
import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import postRoute from './routes/index.js';
import {connectDB} from './config/db.js'
import cors from 'cors'
const port = process.env.PORT || 5000;

connectDB();

const app = express();
app.use(cors({
  origin: 'http://localhost:3000', 
  credentials: true,
}));
app.use('/api',postRoute)

if (process.env.NODE_ENV === 'production') {
    const __dirname = path.resolve();
    app.use(express.static(path.join(__dirname, '/frontend/dist')));
  
    app.get('*', (req, res) =>
      res.sendFile(path.resolve(__dirname, 'frontend', 'dist', 'index.html'))
    );
  } else {
    app.get('/', (req, res) => {
      res.send('API is running....');
    });
  }

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`server started on port ${port}`));