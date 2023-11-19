// postReducer.js
import {  addPost, deletePost, updatePost  } from "../actions/postAction";

// Initial state
const initialState = {
  posts: [],
};

// Reducer function
const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case addPost:
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };
    case deletePost:
      return {
        ...state,
        posts: state.posts.filter((post) => post.id !== action.payload),
      };
    case updatePost:
      // Your logic to update a post
      return state; // For now, returning the current state
    default:
      return state;
  }
};

export default postReducer;
