// postActions.js
import { ADD_POST, DELETE_POST, UPDATE_POST } from "../type/actionTypes";

// create post
const addPost = (post) => {
  return {
    type: ADD_POST,
    payload: post,
  };
};  
// delete post
const deletePost = (postId) => {
  return {
    type: DELETE_POST,
    payload: postId,
  };
};
// update post
const updatePost = (post) => {
  return {
    type: UPDATE_POST,
    payload: post,
  };
};

export { addPost, deletePost, updatePost };
