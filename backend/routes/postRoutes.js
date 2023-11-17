import { Router } from "express";
import { createPost, getPosts, updatePost, deletePost } from "../controllers/postController.js";

const router = Router();

/**
 * @GET
 * @desc // get all Post
 * @access public
 */

router.get('/getAll',getPosts)

/**
 * @POST
 * @desc // create Post
 * @access public
 */

router.post('/Create',createPost)

/**
 * @PUT
 * @desc // update Post
 * @access public
 */

router.put('/update/:id',updatePost)

/**
 * @DELETE
 * @desc // delete Post
 * @access public
 */

router.delete('/delete/:id',deletePost)

export default router;