import { Router } from "express";
import { getAllPosts,getOnePost,createPost,updatePost,deletePost } from "../controller/PostController";

const router = Router();

/**
 * @GET
 * @desc // get all Post
 * @access public
 */

router.get('/',getAllPosts)

/**
 * @GET
 * @desc // get one Post
 * @access public
 */

router.get('/:id',getOnePost)

/**
 * @POST
 * @desc // create Post
 * @access public
 */

router.post('/',createPost)

/**
 * @PUTCH
 * @desc // update Post
 * @access public
 */

router.post('/update/:id',updatePost)

/**
 * @DELETE
 * @desc // delete Post
 * @access public
 */

router.post('/delete/:id'),deletePost

export default router;