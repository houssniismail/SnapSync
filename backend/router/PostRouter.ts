import { Router } from "express";
import { getAllPosts,getOnePost,createPost,updatePost,deletePost } from "../controller/PostController";

const router = Router();

/**
 * @GET
 * @desc // get all Post
 * @access private
 */

router.get('/',getAllPosts)

/**
 * @GET
 * @desc // get one Post
 * @access private
 */

router.get('/:id',getOnePost)

/**
 * @POST
 * @desc // create Post
 * @access private
 */

router.post('/',createPost)

/**
 * @PUTCH
 * @desc // update Post
 * @access private
 */

router.post('/update/:id',updatePost)

/**
 * @DELETE
 * @desc // delete Post
 * @access private
 */

router.post('/delete/:id'),deletePost

export default router;