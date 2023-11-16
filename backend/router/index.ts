import express from "express";
import Post from './PostRouter'

const router = express.Router();


router.use('/post',Post)

export default router