import asynchandler from "express-async-handler";
import { Request, Response } from "express";
import { PostModel } from "../model/index";

interface dataType {
    Creator: string,
    Title: string,
    Message: string
    Tags: string
    Image: string
}

/**
 * @desc Get all post
 * @route GET /post
 * @access private
 */

const getAllPosts = asynchandler(async (req: Request, res: Response) => {
    const posts: dataType[] = await PostModel.find()
    res.status(200).json(posts)
})

/**
 * @desc Get one post
 * @route GET /post/:id
 * @access private
 */

const getOnePost = asynchandler(async (req, res) => {

})

/**
 * @desc create post
 * @route POST /post/
 * @access private
 */

const createPost = asynchandler(async (req: Request, res: Response) => {
    const { Creator, Title, Message, Tags, Image }: dataType = req.body
    const newPost = new PostModel({
        Creator,
        Title,
        Message,
        Tags,
        Image
    })
    const savedPost = await newPost.save()
    res.status(201).json(savedPost);
})

/**
 * @desc Update post
 * @route PUTCH /psot/update/:id
 * @access private
 */

const updatePost = asynchandler(async (req: Request, res: Response) => {
    const postId: string = req.params.id
    const updatePost: dataType | null = await PostModel.findOneAndUpdate(
        { _id: postId },
        req.body,
        { new: true, runValidators: true }
    )
    if (!updatePost) {
        res.status(404).json('is not update')
    }
    res.status(200).json(updatePost);
})

/**
 * @desc Delete post
 * @route DELETE /post/delete/:id
 * @access private
 */

const deletePost = asynchandler(async (req, res) => {

})

export { getAllPosts, getOnePost, createPost, updatePost, deletePost }