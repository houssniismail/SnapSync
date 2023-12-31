// postReducer.js
import { ADD_POST, DELETE_POST, UPDATE_POST } from "../type/actionTypes";

// Initial state
const initialState = {
  posts: [],
};

// Reducer function
const postReducer = (state = initialState, action) => {
  console.log(state)
  switch (action.type) {
    case ADD_POST:
        return {
          ...state,
          posts: [...state.posts, action.payload]
        };
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((post) => post.id !== action.payload),
      };
    case UPDATE_POST:
      // Your logic to update a post
      return state;
    default:
      return state;
  }
};

export  {postReducer};
