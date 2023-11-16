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
 * @access public
 */

const getAllPosts = asynchandler(async (req: Request, res: Response) => {
    const posts: dataType[] = await PostModel.find()
    res.status(200).json(posts)
})

/**
 * @desc Get one post
 * @route GET /post/:id
 * @access public
 */

const getOnePost = asynchandler(async (req, res) => {

})

/**
 * @desc create post
 * @route POST /post/
 * @access public
 */

const createPost = asynchandler(async (req: Request, res: Response) => {
    const { Title, Message, Image }: dataType = req.body
    const newPost = new PostModel({
        Title,
        Message,
        Image
    })
    const savedPost = await newPost.save()
    res.status(201).json(savedPost);
})

/**
 * @desc Update post
 * @route PUTCH /psot/update/:id
 * @access public
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
 * @desc Update comment
 * @route Put /psot/update/comment/:id
 * @access public
 */

const updateComment = asynchandler(async (req: Request, res: Response) => {
    const postId: string = req.params.id
    const updateComment: dataType | null = await PostModel.findOneAndUpdate(
        { _id: postId },
        req.body,
        { new: true, runValidators: true }
    )
    if (!updateComment) {
        res.status(404).json('is not update')
    }
    res.status(200).json(updateComment);
})


/**
 * @desc Delete post
 * @route DELETE /post/delete/:id
 * @access public
 */

const deletePost = asynchandler(async (req, res) => {

})

export { getAllPosts, getOnePost, createPost, updatePost, deletePost }