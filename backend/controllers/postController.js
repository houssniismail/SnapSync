import asyncHandler from 'express-async-handler';
import Post from '../models/postModel.js';

// @desc    Create a new post
// @route   POST /api/posts
// @access  Public
const createPost = asyncHandler(async (req, res) => {
    const { title, message, tags, image, like } = req.body;

    try {
        const newPost = new Post({
            title,
            message,
            tags,
            image,
            like
        });

        const createdPost = await newPost.save();

        res.status(201).json(createdPost);
    } catch (error) {
        res.status(500).json({ message: 'Failed to create the post', error: error.message });
    }
});

// @desc    Get all posts
// @route   GET /api/posts
// @access  Public
const getPosts = asyncHandler(async (req, res) => {
    try {
        const posts = await find({});
        res.json(posts);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch posts', error: error.message });
    }
});

// @desc    Get single post by ID
// @route   GET /api/posts/:id
// @access  Public
const getPostById = asyncHandler(async (req, res) => {
    const postId = req.params.id;

    try {
        const post = await findById(postId);
        if (!post) {
            res.status(404).json({ message: 'Post not found' });
            return;
        }
        res.json(post);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch the post', error: error.message });
    }
});

// @desc    Update a post by ID
// @route   PUT /api/posts/:id
// @access  Public
const updatePost = asyncHandler(async (req, res) => {
    const postId = req.params.id;
    const { title, message, tags, image, like } = req.body;

    try {
        const post = await findById(postId);

        if (!post) {
            res.status(404).json({ message: 'Post not found' });
            return;
        }

        post.title = title || post.title;
        post.message = message || post.message;
        post.tags = tags || post.tags;
        post.image = image || post.image;
        post.like = like || post.like;

        const updatedPost = await post.save();
        res.json(updatedPost);
    } catch (error) {
        res.status(500).json({ message: 'Failed to update the post', error: error.message });
    }
});

// @desc    Delete a post by ID
// @route   DELETE /api/posts/:id
// @access  Public
const deletePost = asyncHandler(async (req, res) => {
    const postId = req.params.id;

    try {
        const post = await findById(postId);

        if (!post) {
            res.status(404).json({ message: 'Post not found' });
            return;
        }

        await post.remove();
        res.json({ message: 'Post removed' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to delete the post', error: error.message });
    }
});

export { createPost, getPosts, getPostById, updatePost, deletePost };
